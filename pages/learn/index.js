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
import AccessDenied from '../../components/access-denied'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

export default function Learn() {
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()

  // Fetch content from protected route
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('/api/protected')
      const json = await res.json()
      const result = await fetch('/api/dataUpdate')
      if (json.content) { setContent(json.content) }
    }
    fetchData()
  },[session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) { return  <Layout><AccessDenied/></Layout> }

  // If session exists, display content
  return (
    <Layout home>
      <Cabin />
    </Layout>
  )
}


