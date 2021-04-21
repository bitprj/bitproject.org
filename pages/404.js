import Layout from '@components/layout'
import {
    Box,
    Button,
    Heading,
    Img,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'

export default function Custom404() {
    return (
        <Layout home>
                <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '520px' }}>
        
            <Heading
              as="h1"
              size="3xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              This page doesn't exist, but isn't this dog cute?
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              If you run into this issue, please let us know by opening an issue on our github repository.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
              <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8" as="a" href={'https://github.com/lazyplatypus/bitproject.org'}>
                Report this as an issue on Github
              </Button>

            </Stack>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="/giphy.gif"
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
        </Layout>
    )
}