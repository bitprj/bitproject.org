import {
    Box,
    Button,
    Heading,
    Img,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiPlay } from 'react-icons/hi'
  import  { Testimonial } from '@components/blog/testimonial'

  export function Header({ title, description, image, author, category }) {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '3rem', lg: '2rem' }}
            mt="8"
            align={{ lg: 'center' }}
            justify="space-between"
          >
            <Box flex="1" maxW={{ lg: '520px' }}>
              <Text
                size="xs"
                textTransform="uppercase"
                fontWeight="semibold"
                color={mode('blue.600', 'blue.300')}
                letterSpacing="wide"
              >
                {category}
              </Text>
              <Heading
                as="h1"
                size="2xl"
                color={mode('blue.600', 'blue.300')}
                mt="4"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                {title}
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="4" mb="4" fontSize="lg" fontWeight="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
              <Testimonial
              name="Daniel Kim"
              company="President of Bit Project"
              image="/daniel.png"
            >
              Sed sed risus pretium quam vulputate dignissim. Ornare quam viverra orci sagittis.
              Integer vitae justo eget magna fermentum iaculis eu non diam
            </Testimonial>

            </Box>
            <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
              <Img
                w="full"
                pos="relative"
                zIndex="1"
                h={{ lg: '100%' }}
                objectFit="cover"
                src={image}
                alt="Screening talent"
              />
              <Box
                pos="absolute"
                w="100%"
                h="100%"
                top="-4"
                left="-4"
                bg={mode('gray.200', 'gray.700')}
              />
            </Box>

          </Stack>
        </Box>
      </Box>
    )
  }
  