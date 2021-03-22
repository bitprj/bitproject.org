import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/blog/header'
import { Card } from '@components/course/card'
import { BlogCard } from '@components/blog/blogcard'
import { Course } from '@components/course/course'
import { BsArrowRight, BsClockFill } from 'react-icons/bs'
import {Link,Box, SlideFade, SimpleGrid} from '@chakra-ui/react'

export default function Page({ title, content, mainImage, quote, description, weeks, blogs }) {

  return (
    <Layout>
      <Header 
        title={title}
        image={mainImage}
        description={quote}
        calltoAction="Apply"
      />
      <Course />
      <Box as="section" pt="16" >
      <SlideFade in>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" mb="24">
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

      <Box as="section" bg="gray.50" py={{ base: '10', sm: '24' }}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12" mb="10">
          {blogs.map(({ Title, Slug, Image, Description }) => (
            <BlogCard
              media={Image}
              title={Title}
              description={Description}
              href={Slug}
            />
            ))}

          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color='blue.600'>
            <span>View all articles</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
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
          blogs {
            slug {
              current
            }
            title
            description
            mainImage{
              asset{
                url
              }
            }
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

  const blogs = pageData.blogs.map((blog) => ({
    Title: blog.title,
    Image: blog.mainImage.asset.url,
    Description: blog.description,
    Slug: blog.slug.current

  }));
  return {
    props: {
      title: pageData.title,
      mainImage: pageData.mainImage.asset.url,
      quote: pageData.quote,
      description: pageData.description,
      weeks,
      blogs
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