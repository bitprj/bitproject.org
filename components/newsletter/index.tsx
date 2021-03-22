import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiShieldCheck } from 'react-icons/hi'
import Image from 'next/image'

export const Newsletter = () => {
  return (
    <Box as="section" bg={mode('gray.100', 'gray.700')} py="12">
      <Box
        textAlign="center"
        bg={mode('white', 'gray.800')}
        shadow="lg"
        maxW={{ base: '2xl', md: '4xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        py="12"
        rounded="lg"
      >
        <Box maxW="md" mx="auto">
          <Image width={100} height={100} src="/hose.png"></Image>
          <Heading m="4" fontWeight="extrabold">
            BitRate
          </Heading>
          <Text fontWeight="md">
            the newsletter organizing the cool & interesting things happening in the world of tech.
          </Text>
          <Box mt="6">
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/bitrate"
              method="post"
              target="popupwindow"
            >
              <Stack>
                <Input
                  aria-label="Enter your email"
                  placeholder="Enter your email to join"
                  rounded="base"
                  type="email" 
                  name="email" 
                  id="bd-email"
                />
                <Button
                  type="submit"
                  w="full"
                  colorScheme="blue"
                  size="lg"
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  Join now
                </Button>
              </Stack>
            </form>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm" mt="5">
              <Box
                aria-hidden
                as={HiShieldCheck}
                display="inline-block"
                marginEnd="2"
                fontSize="lg"
                color={mode('green.600', 'green.400')}
              />
              No spam. We promise.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
