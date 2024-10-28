'use client'

import CommonPagination from '@/components/pagination/CommonPagination/CommonPagination'
import CommonButton from '@/components/ui/button/CommonButton/CommonButton'
import CommonInput from '@/components/ui/input/CommonInput/CommonInput'
import { searchBookMutation } from '@/service/book.service'
import { useState, useReducer, useEffect } from 'react'
import BookItem from '../BookItem/BookItem'
import './SearchBookSection.scss'

export default function SearchBookSection() {
  const [inputValue, setInputValue] = useState('')
  const [isbn, setIsbn] = useState('')
  const { mutate, data: bookData } = searchBookMutation()
  const displayCount = 12

  const reducer = (state: number, action: number) => {
    if (!action) return state
    return Math.ceil(action / displayCount)
  }

  const [countState, dispatch] = useReducer(reducer, 0)

  const searchBook = () => {
    mutate({ query: inputValue, display: String(displayCount) })
  }

  const clickPaginationButton = (pagination: number) => {
    mutate({
      query: inputValue,
      start: String(pagination * displayCount + 1),
      display: String(displayCount),
    })
  }

  const clickBookItem = (isbn: string) => {
    setIsbn(isbn)
  }

  useEffect(() => {
    dispatch(bookData?.total || 0)
  }, [bookData?.total])
  return (
    <div className="search-book-section flex flex-col items-center gap-y-[16px]">
      <div className="flex flex-row gap-x-[16px] w-full">
        <CommonInput
          setInputValue={setInputValue}
          style={{ flex: 1 }}
          pressEnter={searchBook}
        />
        <CommonButton text="검색" clickButton={searchBook} />
      </div>
      <CommonPagination
        totalCount={countState}
        clickButton={clickPaginationButton}
      />
      <div className="book-data-list">
        {bookData?.items &&
          bookData.items.map((item, index) => (
            <div key={`${JSON.stringify(item)}-${index}`}>
              <BookItem
                author={item.author}
                image={item.image}
                pubdate={item.pubdate}
                publisher={item.publisher}
                title={item.title}
                isbn={item.isbn}
                clickItem={clickBookItem}
                isSelected={isbn === item.isbn}
              />
            </div>
          ))}
      </div>
      <CommonButton text="선택" clickButton={searchBook} />
    </div>
  )
}
