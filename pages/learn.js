import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Shell } from '@components/shell'

export default function Learn() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Shell />
    </Layout>
  )
}