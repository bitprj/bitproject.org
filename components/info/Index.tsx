import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { BiDirections, BiHappyBeaming } from 'react-icons/bi'
import { FaGraduationCap, FaRegLifeRing } from 'react-icons/fa'
import { CTAButton } from './CTAButton'
import { Feature } from './Feature'
import { Testimonial } from './Testimonial'

export const Info = () => {
  return (
    <Box as="section" pb="24">
      <Box bg="gray.800" color="white" pt="24" pb="12rem">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Stack
            spacing="10"
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'flex-start', lg: 'center' }}
            justify="space-between"
          >
            <Heading
              size="2xl"
              lineHeight="short"
              fontWeight="extrabold"
              maxW={{ base: 'unset', lg: '800px' }}
            >
              We equip you with the skills you need to launch your next app!
            </Heading>
            <CTAButton w={{ base: 'full', md: 'auto' }}>Get Involved</CTAButton>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: '12', md: '8', lg: '2' }}
            mt={{ base: '12', md: '20' }}
          >
            <Feature icon={<BiDirections />} title="Bootcamps">
              The purpose of lorem ipsum is to create a natural looking block of text (sentence,
              paragraph, page, etc.)
            </Feature>
            <Feature icon={<BiHappyBeaming />} title="Livestreams">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Feature>
            <Feature icon={<FaGraduationCap />} title="Mentorship">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Feature>
            <Feature icon={<FaRegLifeRing />} title="Technical Support">
              Tristique senectus et netus et malesuada fames ac turpis. Convallis a cras semper
              auctor.
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt="-24">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
            <Testimonial
              image="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              name="Alvina Tores"
              role="CEO, Chakra Group"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Testimonial>
            <Testimonial
              image="https://images.unsplash.com/photo-1589729482945-ca6f3a235f7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              name="Jessie Jones"
              role="Marketing Manager"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </Testimonial>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
