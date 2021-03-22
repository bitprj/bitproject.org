import { Testimonial } from './index'
import { Box, Flex, HStack, Img, Stack, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'

export const TestimonialTwo = ({Name1, Role1, Image1, Name2, Role2, Image2, Quote1, Quote2}) => {
return (
    <Box as="section">
    <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
    <SimpleGrid py="16" columns={{ base: 1, lg: 2 }} spacing={{ base: '16', lg: '32' }}>

    <Testimonial
      name={Name1}
      role={Role1}
      image={Image1}
    >
      {Quote1}
    </Testimonial>
    <Testimonial
      name={Name2}
      role={Role2}
      image={Image2}
    >
      {Quote2}
    </Testimonial>
    </SimpleGrid>
    </Box>
  </Box>
)
}