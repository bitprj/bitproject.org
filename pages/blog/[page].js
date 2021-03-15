import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'
import { Header } from '@components/blog/header'

export default function Page({ title, content, mainImage, category }) {
const renderedContent = hydrate(content, {
    components: {
      Layout,
    },
  });

  return (
    <Layout>
      <Header 
        title={title}
        image={mainImage}
      />
      {renderedContent}
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