import * as React from 'react'
import { AiOutlineBulb, AiOutlineSketch, AiOutlineGithub,AiOutlineVideoCamera } from 'react-icons/ai'
import { Box, Icon, Link } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { Placeholder } from './Placeholder'

export const Timeline = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: '4', md: '8' }} >
        <List spacing="12">
          <Link href="https://twitch.tv/bitprojectorg">
            <ListItem
              title="Weekly Livestreams"
              subTitle="Pair Programming Sessions with Industry Leaders"
              icon={<Icon as={AiOutlineVideoCamera} boxSize="6" />}
            >
            </ListItem>
          </Link>
          <ListItem
            title="Interactive Learning Experiences"
            subTitle="powered by Github"
            icon={<Icon as={AiOutlineGithub} boxSize="6" />}
          >
          </ListItem>
          <ListItem
            title="Build a Project"
            subTitle="Being mentored by an engineer"
            icon={<Icon as={AiOutlineBulb} boxSize="6" />}
          >
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
