import { Image, HTMLChakraProps, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props: HTMLChakraProps<'svg'> & { iconColor?: string }) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <div>
      <Image src="/logo.svg"  width={150} height={50}/>
  </div>
  )
}
