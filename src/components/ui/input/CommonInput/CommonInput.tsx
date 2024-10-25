import { parseDomSizeValue } from '@/utils/string.utils'
import { ChangeEvent, useState } from 'react'

export type CommonInputProps = {
  setInputValue: (value: string) => void
  defaultValue?: string
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  padding?: string | number
  placeholder?: string
}

export default function CommonInput({
  defaultValue = '',
  setInputValue,
  width = '100%',
  height = 40,
  borderRadius = 8,
  padding = 8,
  placeholder,
}: CommonInputProps) {
  const [value, setValue] = useState(defaultValue)
  const changeInputValue = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setValue(element.value)
    setInputValue(element.value)
  }
  return (
    <input
      className="border border-gray focus:outline-main text-black"
      style={{
        width: parseDomSizeValue(width),
        height: parseDomSizeValue(height),
        borderRadius: parseDomSizeValue(borderRadius),
        padding: parseDomSizeValue(padding),
      }}
      placeholder={placeholder}
      value={value}
      onChange={changeInputValue}
    />
  )
}
