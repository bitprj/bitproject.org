import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CallToActionLink } from './CallToActionLink'
import { CloseButton } from './CloseButton'

export const Alert = () => (
  <Box as="section" pt="0" pb="0">
    <Box
      bgGradient="linear(to-r, blue.500, purple.500)"
      color="white"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      as="a" href="/course/serverless" 
    >
      <HStack spacing="3">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: '3', md: '6' }}
          width="full"
        >
          <Text>
            <b>Free, Mentored Bootcamp </b> to launch your first app
            with Azure Functions
          </Text>
          <CallToActionLink textAlign="center" width={{ base: 'full', sm: 'auto' }} >
            Apply Now
          </CallToActionLink>
        </Stack>
      </HStack>
    </Box>
  </Box>
)
