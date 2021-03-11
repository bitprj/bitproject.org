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
              Code Your First App with help
              </Heading>
              <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="xl">
              Knowing where to start with your first project is hard. 
              We equip you with the skills to ship your first App!
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
              src="https://res.cloudinary.com/adebayosegun/image/upload/v1611835286/Chakra%20UI/screenshot-base.png"
              alt="Screening talent"
            />
          </Stack>
        </Box>
      </Box>
    )
  }
  