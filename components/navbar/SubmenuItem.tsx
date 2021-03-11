import {
  Box,
  Center,
  chakra,
  HStack,
  HTMLChakraProps,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaChevronRight } from 'react-icons/fa'

interface SubmenuItemProps extends HTMLChakraProps<'a'> {
  title: string
  icon?: React.ReactElement
  children: React.ReactNode
  href: string
}

export const SubmenuItem = (props: SubmenuItemProps) => {
  const { title, icon, children, href, ...rest } = props
  return (
    <chakra.a
      className="group"
      href={href}
      m="-3"
      p="3"
      display="flex"
      alignItems="flex-start"
      transition="all 0.2s"
      rounded="lg"
      _hover={{ bg: mode('gray.50', 'gray.600') }}
      _focus={{ shadow: 'outline' }}
      {...rest}
    >
      <Center
        aria-hidden
        as="span"
        flexShrink={0}
        w="10"
        h="10"
        fontSize="3xl"
        color={mode('blue.600', 'blue.400')}
      >
        {icon}
      </Center>
      <Box marginStart="3" as="dl">
        <HStack as="dt">
          <Text
            fontWeight="semibold"
            color={mode('gray.900', 'white')}
            _groupHover={{ color: mode('blue.600', 'inherit') }}
          >
            {title}
          </Text>
          <Box
            fontSize="xs"
            as={FaChevronRight}
            transition="all 0.2s"
            _groupHover={{ color: mode('blue.600', 'inherit'), transform: 'translateX(2px)' }}
          />
        </HStack>
        <Text as="dd" color={mode('gray.500', 'gray.400')}>
          {children}
        </Text>
      </Box>
    </chakra.a>
  )
}
