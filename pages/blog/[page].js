import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/blog/header'
import components from '@components/blog/body'
import {Box, SlideFade} from '@chakra-ui/react'
export default function Page({ title, content, mainImage, category, quote, description, authorName, authorPic, authorPosition }) {
const renderedContent = hydrate(content, {components});
console.log(description)
console.log(quote)

  return (
    <Layout>
      <Header 
        title={title}
        image={mainImage}
        quote={quote}
        description={description}
        authorName={authorName}
        authorPic={authorPic}
        authorName={authorName}
        authorPosition={authorPosition}
      />
      <Box as="section" pt="16" pb="24">
      <SlideFade in>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      {renderedContent}
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
        allPost(where: { slug: { current: { eq: $slug } } }) {
          title
          description
          quote
          mainImage {
            asset{
              url
            }
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
    variables: {
      slug: params.page,
    },
  });

  const [pageData] = data.allPost;

  const content = await renderToString(pageData.content, {
    components: { Layout },
  });

  
  return {
    props: {
      title: pageData.title,
      mainImage: pageData.mainImage.asset.url,
      content,
      quote: pageData.quote,
      description: pageData.description,
      authorName: pageData.author.name,
      authorPic: pageData.author.image.asset.url,
      authorPosition: pageData.author.position,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
      query AllPages {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });

  const pages = data.allPost;

  return {
    paths: pages.map((p) => `/blog/${p.slug.current}`),
    fallback: false,
  };
}