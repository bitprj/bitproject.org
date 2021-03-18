import Head from 'next/head'
import Layout from '../components/layout'
import { Info } from '@components/info'
import { Landing } from '@components/hero/landing'

export default function Students() {
  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Info />
      <Landing />
    </Layout>
  )
}
