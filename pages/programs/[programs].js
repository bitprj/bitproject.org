import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/hero/header'
import { Card } from '@components/course/card'
import { BlogCard } from '@components/blog/blogcard'
import { Course } from '@components/course/course'
import { BsArrowRight, BsClockFill } from 'react-icons/bs'
import {Link,Box, SlideFade, SimpleGrid} from '@chakra-ui/react'
import {Landing} from '@components/hero/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/hero/feature'

export default function Page({ heading, description, image, cta1, cta2, cta1link, cta2link, quotes, events}) {
  const sfdsfsdf =
  [
    {
      desc : events[0].desc,
      title : events[0].title,
    },
    {
      desc : `Our courses supplement traditional computer science programs with cutting-edge curriculum made in collaboration between student developers and top engineers. Learn about tools and technologies used across the industry.`,
      title : 'Learn Relevant Skills',
    },
    {
      desc : 'Build out your portfolio of personal projects & experiment with new technologies in our guided learning experiences. Walk away with real-world experience that you can put on your resume right away.',
      title : 'Get experience building a project, from scratch',
    },
    {
      desc : 'Students who are accepted into our mentorship program will be paired with engineers from the industry. Throughout the program, you will attend weekly 1:1 meetings in which your mentor will help guide you in building your final project and learning industry best practices. This is also a great opportunity to learn more about the industry and ask your mentor about their journey and experiences in tech.',
      title : '1:1 Mentorship',
    }
  ]
  return (
      <Layout>
        <Landing
            heading={heading}
            description={description}
            cta1={cta1}
            cta2={cta2}
            image={image}
            cta1link={cta1link}
            cta2link={cta2link}

        />
        <TestimonialTwo
            Name1={quotes[0].name}
            Role1={quotes[0].role}
            Image1={quotes[0].image.asset.url}
            Quote1={quotes[0].words}
            Name2={quotes[1].name}
            Role2={quotes[1].role}
            Image2={quotes[1].image.asset.url}
            Quote2={quotes[1].words}
        />
        <Feature
          Heading="Upcoming Events"
          features={events}
          Image={image}
          />
      </Layout>
      
  );
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
    query PageBySlug($slug: String!) {
        allPrograms(where: { slug: { current: { eq: $slug } } }) {
            heading
            description
            slug {
                current
            }
            image {
                asset {
                url
                }
            }
            cta1
            cta1link
            cta2
            cta2link
    		quotes {
              name
              role
              image {
                asset {
                url
                }
              }
              words
            }
        events {
            title
            date
            image {
              asset {
                url
              }
            }
            desc
          }
            }
        }
    `,
    variables: {
      slug: params.programs,
    },
  });
  const [pageData] = data.allPrograms;

  return {
    props: {
      heading: pageData.heading,
      description: pageData.description,
      image: pageData.image.asset.url,
      cta1: pageData.cta1,
      cta1link: pageData.cta1link,
      cta2: pageData.cta2,
      cta2link: pageData.cta2link,
      quotes: pageData.quotes,
      events: pageData.events,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
        query allPrograms {
            allPrograms {
            slug {
                current
            }
            }
        }
    `,
  });

  const pages = data.allPrograms;

  return {
    paths: pages.map((p) => `/programs/${p.slug.current}`),
    fallback: false,
  };
}