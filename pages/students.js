import Head from 'next/head'
import Layout from '../components/layout'
import { Landing } from '@components/hero/landing'

export default function Students() {
  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Landing
        heading="Launch your ideas with Code"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Apply Now"
        cta2="Get Updates"
        image="/becks.svg"
      />
    </Layout> 
  )
}
