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
  import * as React from 'react'
  import { BsArrowRight, BsClockFill } from 'react-icons/bs'
  
  interface BlogProps {
    category: string
    title: string
    href: string
    media: string
    description: string
    author: {
      name: string
      href: string
    }
  }
  
  const Blog = (props: BlogProps) => {
    const { title, href, description, media, author, category } = props
    return (
      <LinkBox
        as="article"
        bg={{ sm: mode('white', 'gray.700') }}
        shadow={{ sm: 'base' }}
        rounded={{ sm: 'md' }}
        overflow="hidden"
        transition="all 0.2s"
        _hover={{ shadow: { sm: 'lg' } }}
      >
        <Flex direction="column">
          <Img height="60" objectFit="cover" alt={title} src={media} />
          <Flex direction="column" px={{ sm: '6' }} py="5">
            <Text
              casing="uppercase"
              letterSpacing="wider"
              fontSize="xs"
              fontWeight="semibold"
              mb="2"
              color="gray.500"
            >
              {category}
            </Text>
            <Heading as="h3" size="sm" mb="2" lineHeight="base">
              <LinkOverlay href={href}>{title}</LinkOverlay>
            </Heading>
            <Text noOfLines={2} mb="8" color={mode('gray.600', 'gray.400')}>
              {description}
            </Text>
            <Flex
              align="baseline"
              justify="space-between"
              fontSize="sm"
              color={mode('gray.600', 'gray.400')}
            >
              <Text>
                By{' '}
                <Box as="a" textDecor="underline" href={author.href}>
                  {author.name}
                </Box>
              </Text>
              <Link href="#">
                <Box as={BsClockFill} display="inline-block" me="2" opacity={0.4} />3 min read
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </LinkBox>
    )
  }
  
  export const BlogCard = () => {
    return (
      <Box as="section" bg={mode('gray.50', 'gray.800')} py={{ base: '10', sm: '24' }}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          <Heading size="xl" mb="8" fontWeight="extrabold">
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="10">
            <Blog
              category="Fashion"
              media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="7 Steps to Get Professional Facial Results At Home"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              href="#"
              author={{ name: 'Segun Adebayo', href: '#' }}
            />
            <Blog
              category="Valentine"
              media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="The Best Excuses To Spend A Cozy Valentine’s Day In"
              description="As much as I love an over-the-top, romantic Valentine’s date, part of me is looking"
              href="#"
              author={{ name: 'Segun Adebayo', href: '#' }}
            />
            <Blog
              category="My Style"
              media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
              description="HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for"
              href="#"
              author={{ name: 'Segun Adebayo', href: '#' }}
            />
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            <span>View all articles</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
      </Box>
    )
  }
  