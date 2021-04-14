import { Center, Stack, Text, Box, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface FeatureProps {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
}

export const SingleFeature = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Stack direction="row" w="100%" spacing="6">
      <Center aria-hidden flexShrink={0} w="12" h="12" rounded="md" color="white" bg="blue.500">
        {icon}
      </Center>
      <Stack>
        <Text as="h3" fontSize="xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" color={mode('gray.600', 'gray.400')} lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Stack>
  )
}
