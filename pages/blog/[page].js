import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/blog/header'
import components from '@components/blog/body'
import {Box, SlideFade} from '@chakra-ui/react'
export default function Page({ title, content, mainImage, category }) {
const renderedContent = hydrate(content, {components});

  return (
    <Layout>
      <Header 
        title={title}
        image={mainImage}
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
          mainImage {
            asset{
              url
            }
          }
          content
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