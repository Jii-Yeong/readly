import React from 'react'
import CommonButton from '../button/CommonButton/CommonButton'

export default function DefaultHeader() {
  return (
    <div className="bg-main w-full h-[56px] px-[8px] flex flex-row justify-between items-center">
      <h1 className="text-white text-[32px] font-bold">READLY</h1>
      <div className="flex flex-row gap-x-2">
        <CommonButton text="로그인" />
        <CommonButton text="회원가입" />
      </div>
    </div>
  )
}
