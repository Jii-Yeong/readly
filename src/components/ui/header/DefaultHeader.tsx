'use client'

import React from 'react'
import CommonButton from '../button/CommonButton/CommonButton'
import { useGoogleLogin } from '@react-oauth/google'

export default function DefaultHeader() {
  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  })
  return (
    <div className="bg-main w-full h-[56px] px-[8px] flex flex-row justify-between items-center">
      <h1 className="text-white text-[32px] font-bold">READLY</h1>
      <div className="flex flex-row gap-x-2">
        <CommonButton text="로그인" clickButton={loginGoogle} />
        <CommonButton text="회원가입" />
      </div>
    </div>
  )
}
