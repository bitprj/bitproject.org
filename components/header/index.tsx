import {
    Box,
    Button,
    Heading,
    Img,
    Link,
    Stack,
    Text,
    SlideFade,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiPlay } from 'react-icons/hi'
  import  { Testimonial } from '@components/blog/testimonial'

  export function Header({ title, description, image, authorName, authorPic, category, slug, quote, calltoAction, authorRole, CTALink}) {
    return (
      <Box as="section" bg={mode('gray.800','gray.200')} pt="16" pb="24">
      <SlideFade in>
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
              <Text color={mode('gray.400', 'gray.600')} mt={{base: "4", lg: "12"}} mb="12" fontSize="2xl" fontWeight="medium">
                {description}
              </Text>
              {quote &&
              <Testimonial
              name={authorName}
              company={authorRole}
              image={authorPic}
            >
              {quote}
            </Testimonial>
            }
            {calltoAction &&
            <Button
                as="a"
                href={CTALink}
                mt="8"
                minW="14rem"
                colorScheme="blue"
                size="lg"
                height="14"
                px="8"
                fontSize="md"
                fontWeight="bold"
              >
                {calltoAction}
              </Button>
            }
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
             
            </Box>

          </Stack>
        </Box>
        </SlideFade>

      </Box>
    )
  }
  