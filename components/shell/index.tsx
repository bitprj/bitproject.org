import { Box, Circle, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import {
  BiCheckCircle,
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiCircle,
  BiCompass,
  BiWallet,
} from 'react-icons/bi'
import { AccountSwitcher } from './AccountSwitcher'
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'

export const Shell = () => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.50" color="black" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
              </Stack>
              <NavGroup label="Week 1">
                <NavItem icon={<BiCheckCircle />} label="Setting up Git" />
                <NavItem icon={<BiCheckCircle />} label="Dancing with Serverless" />
                <NavItem icon={<BiCheckCircle />} label="IDK What's going on " />
                <NavItem icon={<BiCheckCircle />} label="Azure Functions?" />
              </NavGroup>

              <NavGroup label="Week 2">
                <NavItem icon={<BiCompass />} label="Step 1" />
                <NavItem icon={<BiCircle />} label="Step 2" />
                <NavItem icon={<BiCircle />} label="Step 3" />
                <NavItem icon={<BiCircle />} label="Step 4" />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.700')}
          />
        </Box>
      </Flex>
    </Box>
  )
}
