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

  export function Header({ title, description, image, author, category, slug}) {
    return (
      <Link href={slug}>
      <Box as="section" bg={mode('gray.800','gray.200')} pt="16" pb="24">
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
                color={mode( 'blue.300','blue.600')}
                letterSpacing="wide"
              >
                {category}
              </Text>
              <Heading
                as="h1"
                size="2xl"
                color={mode('blue.300','blue.600')}
                mt="4"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                {title}
              </Heading>
              <Text color={mode('gray.400', 'gray.600')} mt={{base: "4", lg: "12"}} mb="12" fontSize="lg" fontWeight="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
              <Testimonial
              name="Daniel Kim"
              company="President of Bit Project"
              image="/daniel.png"
            >
              Doing bitcamp was an awesome experience that changed my life.
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
                bg={mode('gray.700', 'gray.200')}
              />
            </Box>

          </Stack>
        </Box>
      </Box>
      </Link>
    )
  }
  