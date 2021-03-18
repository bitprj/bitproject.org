import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import { Hero } from '@components/hero'
import { Dark } from '@components/hero/dark'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Dark />
      <Hero />
    </Layout>
  )
}
