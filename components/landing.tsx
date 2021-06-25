import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
    LightMode,
    Center
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaPlay } from 'react-icons/fa'

  export const Landing = ({ heading, description,cta1, cta2, image, play, cta1link, cta2link }) => {
    return (
      <Box>
        <Box as="section" bg="gray.800" color="white" pt="7.5rem" bgImage="url('/stars.svg')" >
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} bg="gray.800">
            <Box textAlign="center">
              <Heading
                as="h1"
                size="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                mx="auto"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                {heading}
              </Heading>
              <Text fontSize="xl" mt="4" maxW="xl" mx="auto" >
                {description}
              </Text>
            </Box>
  
            <Stack
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              mt="10"
              mb="20"
              spacing="4"
            >
              <LightMode>
                <Button
                  as="a"
                  href={cta1link}
                  size="lg"
                  colorScheme="blue"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  {cta1}
                </Button>
                <Button
                  as="a"
                  href={cta2link}
                  size="lg"
                  colorScheme="whiteAlpha"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  {cta2}
                </Button>
              </LightMode>
            </Stack>
  
            <Box
              mb={{ base: '-20', md: '-40' }}
              className="group"
              position="relative"
              rounded="lg"
              overflow="hidden"
            >
              <Center>
              <Img
                alt="Screenshot of Envelope App"
                src={image}
                width="80%"
              />
              </Center>
            </Box>
          </Box>
        </Box>
  
        <Box as="section" pt={{ base: '16', md: '40' }} >
        </Box>
      </Box>
    )
  }