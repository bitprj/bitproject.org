import { Box, BoxProps, Center, HTMLChakraProps } from '@chakra-ui/react'
import * as React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

export const CTAButton = (props: HTMLChakraProps<'button'>) => {
  const { children, ...rest } = props as BoxProps
  return (
    <Center
      minW="240px"
      as="button"
      px="6"
      py="4"
      textTransform="uppercase"
      fontWeight="bold"
      transition="all 0.2s"
      rounded="lg"
      outline={0}
      bg="blue.600"
      _focus={{ shadow: 'outline' }}
      _active={{ transform: 'translateY(2px)' }}
      _hover={{ bg: 'blue.700' }}
      {...rest}
    >
      {children}
      <Box as={BiRightArrowAlt} ml="2" fontSize="lg" />
    </Center>
  )
}
