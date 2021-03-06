import * as React from 'react'
import { FiPaperclip } from 'react-icons/fi';
import { BiCodeBlock, BiPaperPlane } from 'react-icons/bi';
import { Box, Icon, Link } from '@chakra-ui/react'
import { List } from './List'
import { ListItem } from './ListItem'
import { Placeholder } from './Placeholder'

export const Timeline = () => {
  return (
    <Box as="section">
      <Box maxW="2xl" mx="auto" p={{ base: '4', md: '8' }} >
        <List spacing="12">
          <Link href="https://apply.bitproject.org">
            <ListItem
              title="April 30th: Application Deadline"
              subTitle="Submit your application to be matched with an industry mentor"
              icon={<Icon as={FiPaperclip} boxSize="6" />}
            >
            </ListItem>
          </Link>
          <ListItem
            title="June 12th: Final Offers Sent Out"
            subTitle="Schedule your interview for the mentorship program"
            icon={<Icon as={BiPaperPlane} boxSize="6" />}
          >
          </ListItem>
          <ListItem
            title="June 21st - August 16th: Program"
            subTitle="Start learning and developing!"
            icon={<Icon as={BiCodeBlock} boxSize="6" />}
          >
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
