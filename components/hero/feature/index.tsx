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
                <SingleFeature icon={<Box as={FaCopy} w="6" h="6" />} title="Calling all engineers">
                Anyone with experience in the tech industry is welcome to apply. If you know the basics of software engineering and are passionate about sharing your knowledge and helping others, we want you! No previous mentorship experience required.  
                </SingleFeature>
                <SingleFeature icon={<Box as={FaPlug} w="6" h="6" />} title="Program Commitment">
                Our Camps range from 4 to 8 weeks. Mentors and students will be paired at the start of the program and are required to meet weekly throughout its duration. This is an opportunity to help people aspiring to get into tech and build meaningful relationships.
                </SingleFeature>
                <SingleFeature icon={<Box as={FaRecycle} w="6" h="6" />} title="Scoped Mentorship">
                Bit Project will provide a guide for each mentoring session to help keep meetings meaningful. For the first half of the program, these will focus on getting to know each other and discussing your interests and experiences in tech. In the second half, the focus will shift to students' final projects as you guide and work with them to build something awesome from scratch
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