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
      desc : 'We are a global student organization developing interactive, engaging technical content for you.',
      title : 'Built for students, by students',
    },
    {
      desc : 'Engineers mentor our students through pair programming sessions. They share insights on job search and engineering best practices.',
      title : 'Built with the Industry',
    },
    {
      desc : 'Our courses are open source and free for all because we believe in the power of accessible technical education.',
      title : 'Free & Accessible',
    }
  ]

  return (
    <Layout home>
      <Head>
        <title>Bit Project</title>
      </Head>
      <Landing
        heading="We equip students with technical superpowers"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Apply Now"
        cta2="Get Updates"
        image="/livecode.png"
        cta1link="/course/serverless"
        cta2link="#"
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
