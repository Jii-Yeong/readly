import { COLORS } from '@/constants/color'
import { parseDomSizeValue } from '@/utils/string.utils'
import React from 'react'

type CommonButtonProps = {
  text: string
  backgroundColor?: string
  color?: string
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  borderColor?: string
  borderWidth?: string | number
  clickButton?: () => void
}

export default function CommonButton({
  text,
  backgroundColor = COLORS.white,
  color = COLORS.black,
  width = 'auto',
  height = 'auto',
  borderRadius = parseDomSizeValue(8),
  borderColor = COLORS.gray,
  borderWidth = 1,
  clickButton,
}: CommonButtonProps) {
  return (
    <button
      className="px-[12px] py-[8px]"
      onClick={clickButton}
      style={{
        backgroundColor,
        color,
        width,
        height,
        borderRadius,
        borderColor,
        borderWidth,
      }}>
      {text}
    </button>
  )
}
