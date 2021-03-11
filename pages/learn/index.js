import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import { Shell } from '@components/shell'
import { StepHead } from '@components/StepHead'

export default function Learn() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Shell>
        <StepHead />
      </Shell>
    </Layout>
  )
}