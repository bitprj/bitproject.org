import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import { Hero } from '@components/hero'
import { Landing } from '@components/hero/landing'
import { Newsletter } from '@components/newsletter'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/hero/feature'

export default function Home() {
  const features =
  [
    {
      desc : 'built for students, by students',
      title : 'Built for students, by students',
    },
    {
      desc : `ful. For the first half of the program, these will focus on getting to know each other and discussing your interests and experiences in tech. In the second half, the focus will shift to students' final projects as you guide and work with them to build something awesome from scratch`,
      title : 'Built with the Industry',
    },
    {
      desc : 'Our Camps range from 4 to 8 weeks. Mentors and students will be paired at the start of the program and are required to meet weekly throughout its duration. This is an opportunity to help people aspiring to get into tech and build meaningful relationships.',
      title : 'Free & Accessible',
    }
  ]

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
      <Feature
      Headline="We give students the tools they need to
      launch their future in tech"
      features={features}
      Image="/coding.png"
      />
    </Layout>
  )
}
