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
      <TestimonialTwo
        Name1="Serena Buxton"
        Role1="Product Developer @ Twilio"
        Image1="/headshots/serena.jpg"
        Quote1="Mentoring with Bit Project gave me an opportunity to connect with students and help ignite their coding confidence and passion"
        Name2="Stefanus Hinardi"
        Role2="Software Engineer @ Microsoft"
        Image2="/headshots/stefanus.jpg"
        Quote2="Mentoring through Bit project has been a blast! Seeing the students work on projects from ideation to implementation has been super exciting."
      />
      <Newsletter />
    </Layout>
  )
}
