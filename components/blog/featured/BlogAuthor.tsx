import { Flex, HStack, Img, StackProps, Text } from '@chakra-ui/react'
import * as React from 'react'

interface BlogAuthorProps extends StackProps {
  image: string
  name: string
  role: string
}

export const BlogAuthor = (props: BlogAuthorProps) => {
  const { image, name, role, ...rest } = props
  return (
    <HStack spacing="4" {...rest}>
      <Img objectFit="cover" rounded="full" w="12" h="12" alt={name} src={image} />
      <Flex direction="column">
        <Text fontWeight="medium">{name}</Text>
        <Text fontSize="sm" color="gray.500">
          {role}
        </Text>
      </Flex>
    </HStack>
  )
}
