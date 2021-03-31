import * as React from 'react'

import {Box, Image, Badge} from '@chakra-ui/react'

export function Card({Name, Text, Week, Link}) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Week {Week}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
             {Link}
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
          </Box>
  
          <Box fontSize="lg" mt="2" fontWeight="bold">
            {Name}
          </Box>
  
          <Box d="flex" mt="2" alignItems="center">
            
            <Box as="span" color="gray.600">
              {Text}
            </Box>
          </Box>
        </Box>
      </Box>
    )
}