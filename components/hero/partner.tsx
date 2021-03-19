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

  export const Partner = () => {
    return (
      <Box>
        <Box as="section" bg="gray.800" color="white" pt="7.5rem">
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
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
                Is your company excited to help make tech accessible?
              </Heading>
              <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
                Knowing where to start with your first project is hard. 
                We equip you with the skills to ship your first App!
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
                  Get started with Github
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
                  Create a Cabin
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
                src="/becky.svg"
              />
              </Center>
            </Box>
          </Box>
        </Box>
  
        <Box as="section" pt={{ base: '40', md: '64' }} pb="24">
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid py="16" columns={{ base: 1, lg: 2 }} spacing={{ base: '16', lg: '32' }}>

          <Testimonial
            name="Jane Cooper"
            role="Marketing Manager @ Freeko.com"
            image="https://images.unsplash.com/photo-1571175351749-e8d06f275d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Testimonial>
          <Testimonial
            name="Matt Godin"
            role="Engineering Manager @ Freezone"
            image="https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Accumsan tortor posuere ac ut consequat semper. Turpis cursus in hac habitasse platea.
            Hendrerit dolor magna eget est
          </Testimonial>
          </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }