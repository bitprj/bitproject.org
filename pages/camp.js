import Head from 'next/head'
import Layout from '../components/layout'
import { TwoCol } from '@components/twocol'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Bit Project</title>
      </Head>
      <TwoCol />
    </Layout>
  )
}
