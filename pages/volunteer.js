import Head from 'next/head'
import Layout from '../components/layout'
import { Landing } from '@components/hero/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/hero/feature'
import { FcTwoSmartphones,FcGraduationCap,FcStatistics,FcAreaChart,FcElectricity,FcConferenceCall,FcCollaboration } from 'react-icons/fc'

export default function Volunteer() {
  const features =
    [
      {
        desc : 'Anyone with experience in the tech industry is welcome to apply. If you know the basics of software engineering and are passionate about sharing your knowledge and helping others, we want you! No previous mentorship experience required.',
        title : 'Calling all engineers',
        icon : <FcTwoSmartphones/>
      },
      {
        desc : `Bit Project will provide a guide for each mentoring session to help keep meetings meaningful. For the first half of the program, these will focus on getting to know each other and discussing your interests and experiences in tech. In the second half, the focus will shift to students' final projects as you guide and work with them to build something awesome from scratch`,
        title : 'Scoped Mentorship',
        icon : <FcTwoSmartphones/>
      },
      {
        desc : 'Our Camps range from 4 to 8 weeks. Mentors and students will be paired at the start of the program and are required to meet weekly throughout its duration. This is an opportunity to help people aspiring to get into tech and build meaningful relationships.',
        title : 'Program Commitment',
        icon : <FcTwoSmartphones/>
      }
    ]

  console.log(features)

  return (
    <Layout home>
      <Head>
        <title>camp.dev</title>
      </Head>
      <Landing
        heading="Make a Difference"
        description="We provide awesome volunteer opportunities for engineers to give back to their communities."
        cta1="Be a Mentor"
        cta2="Learn More"
        image="/becks.svg"
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
      Headline="Volunteer"
      features={features}
      Image="/daniel.png"
      />
    </Layout>
  )
}
