import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Img,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useMenuButton,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiSelector } from 'react-icons/hi'

const AccountSwitcherButton = ({currentCabin}, props: FlexProps) => {
  const buttonProps = useMenuButton(props)
  return (
    <Flex
      as="button"
      {...buttonProps}
      w={'full'}
      display={'flex'}
      alignItems={'center'}
      rounded={'lg'}
      bg={'gray.200'}
      px={'3'}
      py={'2'}
      fontSize={'sm'}
      userSelect={'none'}
      cursor={'pointer'}
      outline={'0'}
      transition={'all 0.2s'}
      _active={{ bg: 'gray.300' }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src="https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png"
          alt="Chakra UI"
        />
        <Box textAlign="start">
          <Box  fontWeight="semibold">
            {currentCabin}
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  )
}

export const AccountSwitcher = ( { currentCabin } ) => {
  return (
    <Menu>
      <AccountSwitcherButton 
      currentCabin = {currentCabin}/>
      <MenuList shadow="lg" py="4" color="gray.600" px="3">
        <Text fontWeight="medium" mb="2">
          @lazyplatypus
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          <MenuItemOption value="chakra-ui" fontWeight="semibold" rounded="md">
            {currentCabin}
          </MenuItemOption>
          <MenuItemOption value="careerlyft" fontWeight="semibold" rounded="md">
            Building Slack Apps
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md">Add a Bitcamp</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
