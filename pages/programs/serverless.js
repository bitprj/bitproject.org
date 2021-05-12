import Layout from '@components/layout'
import {Landing} from '@components/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/feature'
import { Course } from '@components/course/course'
import {Link,Box, SlideFade, SimpleGrid} from '@chakra-ui/react'
import { Card } from '@components/course/card'
import { BlogCard } from '@components/blog/blogcard'
import { BsArrowRight } from 'react-icons/bs'


export default function Page() {
    const weeks =
    [
      {
        Name : 'HTTP Request and APIs 📲',
        Content : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Week : '1',
        Github : 'https://github.com/bitprj/intro-to-serverless'
      },
      {
        Name : 'HTTP Request and APIs 📲',
        Content : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Week : '2',
        Github : 'https://github.com/bitprj/intro-to-serverless'
      },
      {
        Name : 'HTTP Request and APIs 📲',
        Content : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Week : '3',
        Github : 'https://github.com/bitprj/intro-to-serverless'
      }
    ]  

    const blogs =
    [
      {
        Image : '/Camping.svg',
        Title : 'Using NoSQL to Power Student Developer Projects with MongoDB',
        Description : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Slug : 'serverless-price-scraper'
      },
      {
        Image : '/Camping.svg',
        Title : 'Using NoSQL to Power Student Developer Projects with MongoDB',
        Description : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Slug : 'serverless-price-scraper'
      },
      {
        Image : '/Camping.svg',
        Title : 'Using NoSQL to Power Student Developer Projects with MongoDB',
        Description : 'Set up tools needed for the "Emotion Reader" project, including working with an IDE (VSCode), configuring Azure, and using GitHub.',
        Slug : 'serverless-price-scraper'
      },
    ]  

    return (
      <Layout>
        <Landing
            heading="Building with Serverless Functions"
            description="Use Serverless Functions to engineer problem-solving projects by integrating and building various data-rich APIs."
            cta1="Learn More"
            cta2="Student Projects"
            image="/serverless.png"
            cta1link="https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017"
        />
        <TestimonialTwo
            Name1="Daniel Kim"
            Role1="Student at McKinley High"
            Image1="/becky.svg"
            Quote1="We had a great time at Bitcamp WOOO"
            Name2="Daniel Kim"
            Role2="Student at NYADA"
            Image2="/daniel.png"
            Quote2="Did you know that platypuses are cool and they are the username of Daniel"
        /> 
        <Course 
            Description="Managing a server is pretty complicated, and building with serverless architectures simplifies this process. As a student, mastering serverless functions can help you to build projects that solve real-world problems by integrating APIs, constructing user interfaces, and analysing data. Javascript is the core language of this course - one of the most in-demand languages to learn in the industry. "
        />
              <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" mb="24">
                <SimpleGrid columns={{ base:1, md:2, lg:3}} gap="6"> 
                  {weeks.map((p) => (
                      <Card
                        Name={p.Name}
                        Text={p.Content}
                        Link={p.Github}
                        Week={p.Week}
                      />
                  ))}
                </SimpleGrid>
       </Box>

       <Box as="section" bg="gray.50" py={{ base: '10', sm: '24' }}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12" mb="10">
          {blogs.map(({ Title, Slug, Image, Description }) => (
            <BlogCard
              media={Image}
              title={Title}
              description={Description}
              href={`/blog/${Slug}`}
            />
            ))}

          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color='blue.600' href="/blog">
            <span>View all projects</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
      </Box>

      </Layout>
      
  );
}