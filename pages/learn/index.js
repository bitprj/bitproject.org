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

export default function Learn({ menu }) {
  console.log(menu)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Shell>
        <StepHead />
        <Box p="8">
        {/* <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={readmedoc}
          escapeHtml={false}
        />; */}
        </Box>
      </Shell>
    </Layout>
  )
}




export async function getServerSideProps(context) {
  const token = "69380bc53bae0c1b608bd313d2c6042d1c0ed956";

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
        query {
          repository(owner: "bitprj", name: "cabin") {
            object(expression: "main:.bit/responses") {
              ... on Tree {
                entries {
                  oid
                  name
                  type
                  object {
                    ... on Blob {
                      text
                    }
                  }
                }
              }
            }
          }
        }
        
    `
  });

  return {
    props: {
      menu: data.repository.object.entries
    }, // will be passed to the page component as props
  }
}