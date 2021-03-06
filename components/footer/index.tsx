import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  DarkMode,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Logo } from './Logo'
import { SocialLink } from './SocialLink'
import { links, socialLinks } from './_data'
import { LinkGroup } from './LinkGroup'
import { SubscribeForm } from './SubscribeForm'



export const Footer = () => (
  <DarkMode>
  <Box as="footer" bg='gray.800' color="white">
    <Box
      maxW={{ base: 'xl', md: '7xl' }}
      mx="auto"
      px={{ base: '6', md: '8' }}
      py={{ base: '12', md: '20' }}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        mb={{ base: '10', lg: '16' }}
        align="flex-start"
        id="top"
      >
        <SimpleGrid
          flex="1"
          w={{ base: 'full', lg: 'auto' }}
          maxW={{ lg: '2xl' }}
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: '12', md: '10' }}
          fontSize="sm"
          marginEnd={{ md: '4', lg: '16' }}
        >
          {links.map((group, idx) => (
            <LinkGroup key={idx} data={group} />
          ))}
        </SimpleGrid>
        <Box
          flex="2"
          maxW={{ lg: '420px' }}
          ml={{ lg: 'auto' }}
          fontSize="sm"
          mt={{ base: '12', lg: 0 }}
        >
          <Text casing="uppercase" mb={{ base: 6, lg: 10 }} fontWeight="bold" letterSpacing="wide">
            Subscribe to our newsletter!
          </Text>
          <Text lineHeight="tall">
            Stay up to date with all of our resources and opportunities! We promise we won't spam.
          </Text>
          <SubscribeForm />
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        align={{ base: 'flex-start', lg: 'center' }}
        justify="space-between"
        fontSize="sm"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '4', md: '12' }}
          mt={{ base: '8', lg: 0 }}
          w={{ base: 'full', lg: 'auto' }}
          justify={{ base: 'space-between', lg: 'flex-start' }}
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Logo iconColor='blue.300' h="6" />
          <HStack spacing="2" mt={{ lg: '8' }} as="ul" listStyleType="none">
            {socialLinks.map((link, idx) => (
              <Box as="li" key={idx}>
                <SocialLink href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialLink>
              </Box>
            ))}
          </HStack>
        </Stack>
      </Flex>
    </Box>
  </Box>
  </DarkMode>
)

const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color='blue.300'
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
)
