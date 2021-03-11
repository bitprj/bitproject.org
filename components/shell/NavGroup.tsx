import { Box, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const NavGroup = (props: { label: string; children: React.ReactNode }) => {
  const { label, children } = props
  return (
    <Box>
      <Text
        px="3"
        fontSize="xs"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="widest"
        color="gray.500"
        mb="3"
      >
        {label}
      </Text>
      <Stack spacing="1">{children}</Stack>
    </Box>
  )
}
