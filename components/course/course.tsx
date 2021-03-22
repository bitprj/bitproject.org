import {
    Box,
    Button,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Timeline } from './timeline'
  export function Course() {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="24" pb="12" overflow="hidden">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Stack
            align="flex-start"
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '20', lg: '8' }}
            justify="space-between"
            mb="20"
          >
            <Box flex="1" maxW={{ lg: 'xl' }} >
              <Heading as="h2" size="xl" mt="8" fontWeight="extrabold">
                What you will learn
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">   
                At Hackbright, you will learn the fundamentals of computer science in addition to modern web development. The immersive bootcamp program includes labs and lectures.
                <br></br><br></br>
                One of the most in-demand languages to learn in the industry is Python – the core language of our curriculum. Python is a versatile, general-purpose programming language used for both desktop and online software/website applications. Companies that use Python include Google, Yelp and Dropbox (to name a few).
                <br></br><br></br>
                Mastering the basics of Python will help you start thinking like an engineer. You can feel confident that you’ll walk away from here ready to tackle any engineering role.
              </Text>
            </Box>
            <Timeline/>
          </Stack>
        </Box>
      </Box>
    )
  }