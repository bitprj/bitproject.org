import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
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
  <Box as="footer" bg={mode('gray.50', 'gray.800')}>
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
            Get Overflow resources, curated content, and design inspiration delivered straight into
            your inbox. Be the first to learn the news about new features and product updates.
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
          <Logo iconColor={mode('blue.500', 'blue.300')} h="6" />
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
        <Box>
          <Text>&copy; {new Date().getFullYear()} Envelope Inc</Text>
          <Text mt="2">
            Made with <Heart /> by Chakra Inc.
          </Text>
        </Box>
      </Flex>
    </Box>
  </Box>
)

const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color={mode('blue.500', 'blue.300')}
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
)
