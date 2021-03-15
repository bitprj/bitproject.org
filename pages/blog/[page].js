import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { getSanityContent } from '@utils/sanity';
import Layout from '@components/layout'

export default function Page({ title, content }) {
const renderedContent = hydrate(content, {
    components: {
      Layout,
    },
  });

  return (
    <Layout>
      <h1>{title}</h1>
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
      content
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