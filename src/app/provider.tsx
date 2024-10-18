'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={googleClientId}>
        {children}
      </GoogleOAuthProvider>
    </QueryClientProvider>
  )
}
