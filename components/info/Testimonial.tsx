import { Box, Flex, Img, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface TestimonialProps {
  image: string
  name: string
  role: string
  children: React.ReactNode
}

export const Testimonial = (props: TestimonialProps) => {
  const { children, image, name, role } = props
  return (
    <Box
      as="blockquote"
      rounded="2xl"
      bg={mode('white', 'gray.700')}
      color={mode('gray.800', 'white')}
      shadow="lg"
      px="10"
      py="8"
    >
      <Flex mb="6">
        <Img
          mt="-12"
          bg={mode('white', 'gray.700')}
          objectFit="cover"
          w="24"
          h="24"
          rounded="full"
          color={mode('white', 'gray.700')}
          shadow="0 0 0 10px currentColor"
          src={image}
          alt={name}
        />
        <Box marginStart="5">
          <Text as="cite" fontStyle="normal" fontSize="md" fontWeight="extrabold">
            {name}
          </Text>
          <Text
            mt="1"
            color={mode('gray.600', 'gray.400')}
            textTransform="uppercase"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {role}
          </Text>
        </Box>
      </Flex>
      <Text color={mode('gray.600', 'gray.400')}>{children}</Text>
    </Box>
  )
}
