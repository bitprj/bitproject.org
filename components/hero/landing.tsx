import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
    LightMode,
    Center
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaPlay } from 'react-icons/fa'
  import { Testimonial } from '@components/testimonial'

  export const Landing = ({ heading, description,cta1, cta2, image, play }) => {
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
                  href="#"
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
                  href="#"
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
              cursor="pointer"
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
              {play == 0 &&
              <Circle
                size="20"
                as="button"
                bg="white"
                shadow="lg"
                color="blue.600"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate3d(-50%, -50%, 0)"
                fontSize="xl"
                transition="all 0.2s"
                _groupHover={{
                  transform: 'translate3d(-50%, -50%, 0) scale(1.05)',
                }}
              >
                <VisuallyHidden>Play demo video</VisuallyHidden>
                <FaPlay />
              </Circle>
              }
            </Box>
          </Box>
        </Box>
  
        <Box as="section" pt={{ base: '16', md: '40' }} >
        </Box>
      </Box>
    )
  }