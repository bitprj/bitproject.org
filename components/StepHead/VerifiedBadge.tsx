import { Box, HStack, StackProps, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

export const VerifiedBadge = (props: StackProps) => {
  return (
    <HStack color={mode('blue.600', 'blue.300')} minW="0" spacing="1" {...props}>
      <Box as={HiBadgeCheck} />
      <Text fontSize="sm" fontWeight="semibold" lineHeight="1">
        Completed
      </Text>
    </HStack>
  )
}
