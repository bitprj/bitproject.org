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
  
  export const Feature = ({Headline, Features}) => {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="32">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
            Ready to give back?
          </Heading>
          <Box mt="24">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
              <Stack spacing="12" maxW="lg">
                <SingleFeature icon={<Box as={FaCopy} w="6" h="6" />} title="Everyone is Welcome.">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </SingleFeature>
                <SingleFeature icon={<Box as={FaPlug} w="6" h="6" />} title="Program Commitment">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </SingleFeature>
                <SingleFeature icon={<Box as={FaRecycle} w="6" h="6" />} title="Session Guides">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </SingleFeature>
              </Stack>
              <Center shadow="lg" minH="26rem">
                <Img
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="https://images.unsplash.com/photo-1561346745-5db62ae43861?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80"
                  alt="Mentorship"
                />
              </Center>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    )
  }