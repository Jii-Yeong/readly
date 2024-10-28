import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'

type BookItemProps = {
  title: string
  author: string
  publisher: string
  pubdate: string
  image: string
  isbn: string
  isSelected?: boolean
  clickItem?: (isbn: string) => void
}

export default function BookItem({
  title,
  author,
  publisher,
  pubdate,
  image,
  isbn,
  isSelected,
  clickItem,
}: BookItemProps) {
  const handleClickItem = () => {
    if (clickItem) clickItem(isbn)
  }
  return (
    <div
      className="cursor-pointer p-[8px] rounded-[8px] h-full"
      style={{ backgroundColor: isSelected ? COLORS.highlight : 'transparent' }}
      onClick={handleClickItem}>
      <Image
        src={image}
        alt="book-image"
        width={100}
        height={132}
        className="w-full h-auto"
      />
      <div className="py-[8px] flex flex-col gap-y-[8px]">
        <p className="text-md font-bold leading-5">{title}</p>
        <p className="text-sm">{author}</p>
        <p className="text-sm text-dark-gray">{publisher}</p>
        <p className="text-sm text-dark-gray">{pubdate}</p>
      </div>
    </div>
  )
}
