import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { ReactNode } from 'react'

type ProviderProps = {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  )
}
