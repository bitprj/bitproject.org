import {
    Box,
    Flex,
    HStack,
    Img,
    Stack,
    StackProps,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  interface TestimonialProps extends StackProps {
    name: string
    company: string
    image?: string
  }
  
  export const Testimonial = (props: TestimonialProps) => {
    const { image, company, name, children, ...rest } = props
    return (
      <Stack
        spacing={6}
        h="100%"
        rounded="2xl"
        shadow="sm"
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '14' }}
        bg={mode('gray.700','white')}
        color={mode('gray.300','gray.800')}
        {...rest}
      >
        <Box fontSize={{ base: 'md', md: 'lg' }} flex="1">
          {children}
        </Box>
        <HStack spacing={{ base: 3, md: 5 }}>
          <Img objectFit="cover" rounded="full" boxSize={14} name={name} src={image} />
          <Flex direction="column">
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="sm" fontWeight="medium" opacity={0.7}>
              {company}
            </Text>
          </Flex>
        </HStack>
      </Stack>
    )
  }
  