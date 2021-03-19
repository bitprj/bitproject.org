import Head from 'next/head'
import Layout from '../components/layout'
import { Hero } from '@components/hero'
import { Dark } from '@components/hero/dark'
import { Partner } from '@components/hero/partner'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Partner />
    </Layout>
  )
}
