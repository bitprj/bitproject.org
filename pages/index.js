import Layout from '../components/layout'
import { Landing } from '@components/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/feature'
import { FaPencilAlt,FaGlobeEurope,FaHammer } from 'react-icons/fa'
import Meta from '@components/util/seo'

export default function Home() {
  const features =
  [
    {
      desc : 'We are a global student organization developing interactive, engaging technical content for you.',
      title : 'Built for students, by students',
      icon : <FaPencilAlt />,
    },
    {
      desc : 'Engineers mentor our students through pair programming sessions. They share insights on job search and engineering best practices.',
      title : 'Built with the Industry',
      icon : <FaHammer />,
    },
    {
      desc : 'Our courses are open source and free for all because we believe in the power of accessible technical education.',
      title : 'Free & Accessible',
      icon : <FaGlobeEurope />,
    }
  ]

  return (
    <Layout home>
        <Meta 
        title='Bit Project'
        desc='Bit Project is a 501(c)(3) nonprofit making tech accessible'
        /> 
      <Landing
        heading="We equip students with technical superpowers"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Apply Now"
        cta2="Get Updates"
        image="/livecode.png"
        cta1link={' https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017'}
        cta2link={'https://airtable.com/shr9hT8pEXpAAM00Z'}
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
