import Head from 'next/head'
import Layout from '../components/layout'
import { Landing } from '@components/hero/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/hero/feature'
import { FcStatistics,FcConferenceCall } from 'react-icons/fc'
import { FaRegHandshake } from 'react-icons/fa'
import Meta from '@components/util/seo'

export default function Volunteer() {
  const features =
    [
      {
        desc : 'Students are paired with mentors based on their technical skills and professional interests, and how they interact with the interests and expertise of the mentors.',
        title : 'Student-Mentor Pairings',
        icon : <FaRegHandshake/>
      },
      {
        desc : `Bit Project will provide a guide for each mentoring session to help keep meetings meaningful, for both the mentors and the students.`,
        title : 'Scoped Mentorship Meetings',
        icon : <FcConferenceCall/>
      },
      {
        desc : 'Through your feedback, we will develop a program that is tailored to your needs and expectations. We will also pass along feedback from the students over to you, to help improve the quality of your experience as a mentor.',
        title : 'Constructive Mentor Feedback',
        icon : <FcStatistics/>
      }
    ]

  return (
    <Layout home>
      <Meta 
        title='Volunteer | Bit Project'
        desc='Bit Project is a 501(c)(3) nonprofit making tech accessible'
        /> 
      <Landing
        heading="Make a Difference"
        description="We provide awesome volunteer opportunities for engineers to give back to their communities."
        cta1="Be a Mentor"
        cta2="Learn More"
        image="/becks.svg"
        cta1link="https://info421626.typeform.com/to/T6YYDgAP"
        cta2link="/serverless.pdf"
        
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
      Headline="Calling All Engineers"
      features={features}
      Image="/mentorship.png"
      />
    </Layout>
  )
}
