import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Featured } from '@components/blog/featured'
import { BlogCard } from '@components/blog/blogcard'
import { getSanityContent } from '@utils/sanity';
import { BsArrowRight, BsClockFill } from 'react-icons/bs'

export default function blog({ posts }) {
  console.log(posts)
  return (
    <Layout home>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <Featured 
            title="Beau built an IoT heartrate monitor with Azure Functions"
            description="this is testing"
            media="https://upload.wikimedia.org/wikipedia/commons/8/87/Downtown_Davis1_2008.JPG"
            author="Daniel kim"
            category="Food"
      />
      
      <Box as="section" bg={mode('white.50', 'gray.800')} py={{ base: '10', sm: '24' }}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="10">
          {posts.map(({ title, slug, mainImage, authorName, authorPic }) => (
            <BlogCard
              media={mainImage}
              title={title}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              href="#"
              author={{ name: "Daniel", href: '#' }}
            />
            ))}
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            <span>View all articles</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}



export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
      query AllPosts {
        allPost {
          title
          categories {
            title
          }
          mainImage {
            asset{
              url
            }
          }
          slug{
            current
          } 
          bodyRaw
          author {
            name
            image {
              asset {
                url
              }
            }
          }
        }
      }
    `,
  });

  const posts = data.allPost.map((post) => ({
    title: post.title,
    slug: post.slug.current,
    mainImage: post.mainImage.asset.url,
    body: post.bodyRaw,
    authorName: post.author.name,
    authorPic: post.author.image.asset.url
  }));

  return {
    props: { posts },
  };
}