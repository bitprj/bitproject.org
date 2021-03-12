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
  
  export function Hero() {
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
            <Box flex="1" maxW={{ lg: 'xl' }} pt="10">
              <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              Learn directly on Github
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
              The ever helpful virtual camp counselor, Greg will guide you throughout your adventure. Be sure to follow his rules and most importantly, have La Croix. (not sponsored)
              </Text>
              <Button
                mt="8"
                minW="14rem"
                colorScheme="blue"
                size="lg"
                height="14"
                px="8"
                fontSize="md"
                fontWeight="bold"
              >
                Get Started with Github
              </Button>
            </Box>
            <Img
              pos="relative"
              marginEnd="-20rem"
              w="56rem"
              src="https://user-images.githubusercontent.com/10321085/110902644-1489c300-82bb-11eb-883e-66a6b42b59f6.png"
              alt="Screening talent"
            />
          </Stack>
        </Box>
      </Box>
    )
  }
  