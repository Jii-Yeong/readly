'use client'

import CommonButton from '../button/CommonButton/CommonButton'
import { useGoogleLogin } from '@react-oauth/google'
import { loginByGoogleMutation } from '@/service/users.service'
import ProfileImage from '../image/ProfileImage/ProfileImage'

export default function DefaultHeader() {
  const mutation = loginByGoogleMutation()
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      mutation.mutate(tokenResponse.code)
    },
    flow: 'auth-code',
  })
  return (
    <div className="bg-main w-full h-[56px] px-[8px] flex flex-row justify-between items-center">
      <h1 className="text-white text-[32px] font-bold">READLY</h1>
      <div className="flex flex-row gap-x-2">
        <CommonButton text="로그인" clickButton={loginGoogle} />
        <CommonButton text="회원가입" />
        <ProfileImage />
      </div>
    </div>
  )
}
