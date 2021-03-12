import {
  Badge,
  Box,
  HStack,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

interface BlogMetaProps {
  type: string
  tags: string[]
}

export const BlogMeta = (props: BlogMetaProps) => {
  const { type, tags } = props
  return (
    <Stack
      spacing={{ base: '4', md: '6' }}
      direction={{ base: 'column', md: 'row' }}
      textTransform="uppercase"
      fontSize="xs"
      letterSpacing="wider"
      fontWeight="semibold"
    >
      <Badge colorScheme="blue" variant="solid" alignSelf="flex-start">
        {type}
      </Badge>
      <HStack
        divider={<StackDivider h="3" alignSelf="center" />}
        spacing="3"
        color={mode('gray.600', 'gray.400')}
      >
        {tags.map((tag, index) => (
          <Box key={index}>{tag}</Box>
        ))}
      </HStack>
    </Stack>
  )
}
