import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/blog/header'
import { Card } from '@components/course/card'

import {Box, SlideFade, SimpleGrid} from '@chakra-ui/react'
export default function Page({ title, content, mainImage, quote, description, weeks }) {
console.log(weeks)

  return (
    <Layout>
      <Header 
        title={title}
        image={mainImage}
        description={quote}
      />
      <Box as="section" pt="16" pb="24">
      <SlideFade in>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
                <SimpleGrid columns={{ base:1, md:2, lg:3}} gap="6"> 
                  {weeks.map((p) => (
                      <Card
                        Name={p.Name}
                        Text={p.content}
                        Link={p.githublink}
                        Week={p.weeknumber}
                      />
                  ))}
                </SimpleGrid>
       </Box>

      </Box>
      </SlideFade>
      </Box>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        allCourse(where: { slug: { current: { eq: $slug } } }) {
          title
          description
          quote
          mainImage {
            asset{
              url
            }
          }
          description
          weeks {
                  Name
                  content
                  githublink
                  weeknumber
          }
        }
      }
    `,
    variables: {
      slug: params.course,
    },
  });
  const [pageData] = data.allCourse;

 
  const weeks = pageData.weeks.map((week) => ({
    Name: week.Name,
    content: week.content,
    weeknumber: week.weeknumber,
    githublink: week.githublink,
  }));

  return {
    props: {
      title: pageData.title,
      mainImage: pageData.mainImage.asset.url,
      quote: pageData.quote,
      description: pageData.description,
      weeks
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query allCourses {
        allCourse {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allCourse;

  return {
    paths: pages.map((p) => `/course/${p.slug.current}`),
    fallback: false,
  };
}