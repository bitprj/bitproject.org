import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import { Shell } from '@components/shell'
import { StepHead } from '@components/StepHead'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown'
import { Box, Circle, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import { Cabin } from '@components/hero/cabin'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

export default function Learn() {
  return (
    <Layout home>
      <Cabin />
    </Layout>
  )
}


