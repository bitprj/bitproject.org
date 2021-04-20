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
import Layout, { siteTitle } from '../../components/layout'
import { BlogCard } from '@components/blog/blogcard'
import { Header } from '@components/blog/header'
import { getSanityContent } from '@utils/sanity';
import { BsArrowRight, BsClockFill } from 'react-icons/bs'

export default function blog({ posts }) {
  console.log(posts)
  return (
    <Layout home>
      <Head>
        <title>{posts.title}</title>
      </Head>
      <Header 
        title={posts[0].title}
        image={posts[0].mainImage}
        slug={posts[0].slug}
        quote={posts[0].quote}
        description={posts[0].description}
        authorName={posts[0].authorName}
        authorPic={posts[0].authorPic}
        authorRole={posts[0].authorPosition}
      />
      
      <Box as="section" bg={mode('white.50', 'gray.800')} py={{ base: '10', sm: '24' }}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12" mb="10">
          {posts.slice(1).map(({ title, slug, mainImage, description, authorName, authorPic }) => (
            <BlogCard
              media={mainImage}
              title={title}
              description={description}
              href={slug}
              author={{ name: authorName /* , href: '#' */ }}
            />
            ))}

          </SimpleGrid>
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
          description
          quote
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
          content
          author {
            name
            image {
              asset {
                url
              }
            }
            position
          }
        }
      }
    `,
  });



  const posts = data.allPost.map((post) => ({
    title: post.title,
    slug:  `/blog/${post.slug.current}`,
    mainImage: post.mainImage.asset.url,
    body: post.content,
    authorName: post.author.name,
    authorPic: post.author.image.asset.url,
    authorPosition: post.author.position,
    quote: post.quote,
    description: post.description,
  }));

  return {
    props: { posts },
  };
}