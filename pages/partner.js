import Layout from '../components/layout'
import { Landing } from '@components/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { FaBullhorn, FaCheck, FaHandshake } from 'react-icons/fa'
import { Feature } from '@components/feature'
import Meta from '@components/util/seo'

export default function Partner() {
  const features =
  [
    {
      desc : 'Anyone with experience in the tech industry is welcome to apply. If you know the basics of software engineering and are passionate about sharing your knowledge and helping others, we want you! No previous mentorship experience required.',
      title : 'Calling all engineers',
      icon : <FaBullhorn />
    },
    {
      desc : `Bit Project will provide a guide for each mentoring session to help keep meetings meaningful. For the first half of the program, these will focus on getting to know each other and discussing your interests and experiences in tech. In the second half, the focus will shift to students' final projects as you guide and work with them to build something awesome from scratch`,
      title : 'Scoped Mentorship',
      icon : <FaHandshake />
    },
    {
      desc : 'Our Camps range from 4 to 8 weeks. Mentors and students will be paired at the start of the program and are required to meet weekly throughout its duration. This is an opportunity to help people aspiring to get into tech and build meaningful relationships.',
      title : 'Program Commitment',
      icon : <FaCheck />
    }
  ]  

  return (
    <Layout home>
        <Meta 
        title='Partner with Us | Bit Project'
        desc='Bit Project is a 501(c)(3) nonprofit making tech accessible'
        /> 
      <Landing
        heading="Is your company excited to help make tech accessible?"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Work with Us"
        cta2="Case Studies"
        image="/becks.svg"
        cta1link="mailto:info@bitproject.org"
        cta2link="/blog"
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
      Headline="Work with us to make cutting edge tech accessible "
      features={features}
      Image="/codeperson2.jpg"
      />
    </Layout>
  )
}
