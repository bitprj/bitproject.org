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
  
  export function Cabin() {
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
              <Heading as="h1" size="2xl" mt="8" fontWeight="extrabold">
                Song Recommendation Bot with Azure Functions
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
               Start Learning 
              </Button>
            </Box>
            <Img
              pos="relative"
              marginEnd="-5rem"
              w="40rem"
              src="https://cdn.dribbble.com/users/1358460/screenshots/14313986/media/cf14d4ef432f3a05078df0ac1d1e7387.jpg?compress=1&resize=1200x900"
              alt="Screening talent"
            />
          </Stack>
        </Box>
      </Box>
    )
  }
  