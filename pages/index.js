import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import { Hero } from '@components/hero'
import { Landing } from '@components/hero/landing'
import { Newsletter } from '@components/newsletter'
import { TestimonialTwo } from '@components/testimonial/two'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Landing
        heading="We equip students with technical superpowers"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Apply Now"
        cta2="Get Updates"
        image="/livecode.png"
      />
      <TestimonialTwo />
      <Newsletter />
    </Layout>
  )
}
