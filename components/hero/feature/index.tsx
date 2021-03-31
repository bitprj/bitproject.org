import {
    Box,
    Center,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa'
  import { SingleFeature } from './feature'
  
  export const Feature = ({Headline, features, Image}) => {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="32">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
            {Headline}
          </Heading>
          <Box mt="24">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
              <Stack spacing="12" maxW="lg">
              {features.map((f) => (
                <SingleFeature icon={f.icon} title={f.title}>
                  {f.date}
                  <br></br>
                  {f.desc}
                </SingleFeature>
              ))
              }
              </Stack>
              <Center shadow="lg" minH="26rem">
                <Img
                  objectFit="cover"
                  w="full"
                  h="full"
                  src={Image}
                  alt="Mentorship"
                />
              </Center>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }