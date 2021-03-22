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
  export function Course({Description}) {
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
                {Description}
              </Text>
            </Box>
            <Timeline/>
          </Stack>
        </Box>
      </Box>
    )
  }