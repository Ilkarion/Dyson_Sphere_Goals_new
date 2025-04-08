"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider }  from "next-themes"
import Image from "next/image"
import { useTheme } from 'next-themes'
import { useState, useEffect } from "react"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  switch (resolvedTheme) {
    case 'light':
      src = '/images/bg-light-theme.png'
      break
    case 'dark':
      src = '/images/bg-dark-theme.png'
      break
    default:
      src = '/images/bg-light-theme.png'
      break
  }

  return (
  <Image src={src} 
  alt="background" 
  layout="fill"
  objectFit="cover"
  objectPosition="center"
  />
  )
}

export default ThemedImage