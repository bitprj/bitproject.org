import { Box, Button, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiBriefcase, HiClock, HiCurrencyDollar, HiLocationMarker, HiPencil, HiOutlineMinusCircle} from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { TextWithIcon } from './TextWithIcon'

// import { VerifiedBadge } from './VerifiedBadge'

export const StepHead = () => {
  return (
    <div>
    <Box p="8">
      <Box maxW="7xl" mx="auto">
        <Stack
          spacing={{ base: '8', md: '4' }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align="flex-start"
        >
          <Stack direction="row" flex="1" spacing="6" align={{ base: 'flex-start', md: 'center' }}>
            <Img
              src="https://static.vecteezy.com/system/resources/previews/000/209/078/original/vector-night-camp-scene-illustration.jpg"
              alt="Melinda Turner"
              objectFit="cover"
              rounded="lg"
              h="16"
              w="16"
            />
            <Box flex="1">
              <HStack mb={{ base: '3', md: '1' }}>
                <Text fontSize="xl" fontWeight="bold">
                  Set up Github with the IDE
                </Text>
                {/* <VerifiedBadge /> */}
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '3', lg: '6' }}>
                <TextWithIcon icon={<HiClock />}>4 hours</TextWithIcon>

              </Stack>
            </Box>
          </Stack>
          <HStack spacing="4">
            <Button variant="outline" leftIcon={<Box as={AiFillGithub} fontSize="lg" />}>
              View on Github
            </Button>
            <Button colorScheme="red" leftIcon={<Box as={HiOutlineMinusCircle} fontSize="lg" />}>
              Blocked
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </div>
  )
}
