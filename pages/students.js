import Layout from '../components/layout'
import { Landing } from '@components/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/feature'
import Meta from '@components/util/seo'

export default function Students() {
  const features =
  [
    {
      desc : 'Our programs are beginner-friendly and open to anyone, whether you are still a student or looking to make a career change into tech. All of our programs are funded by our amazing partners, so there is no cost for students.',
      title : 'Everyone is Welcome',
    },
    {
      desc : `Our courses supplement traditional computer science programs with cutting-edge curriculum made in collaboration between student developers and top engineers. Learn about tools and technologies used across the industry.`,
      title : 'Learn Relevant Skills',
    },
    {
      desc : 'Build out your portfolio of personal projects & experiment with new technologies in our guided learning experiences. Walk away with real-world experience that you can put on your resume right away.',
      title : 'Get experience building a project, from scratch',
    },
    {
      desc : 'Students who are accepted into our mentorship program will be paired with engineers from the industry. Throughout the program, you will attend weekly 1:1 meetings in which your mentor will help guide you in building your final project and learning industry best practices. This is also a great opportunity to learn more about the industry and ask your mentor about their journey and experiences in tech.',
      title : '1:1 Mentorship',
    }
  ]  
  return (
    <Layout home>
        <Meta 
        title='For Students | Bit Project'
        desc='Bit Project is a 501(c)(3) nonprofit making tech accessible'
        /> 
      <Landing
        heading="Launch your ideas with Code"
        description="We provide cutting-edge, open source learning experiences to prepare students for careers in tech."
        cta1="Apply Now"
        cta2="Learn More"
        image="/becks.svg"
        cta1link="https://apply.bitproject.org"
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
      Headline="Learn how to code like an engineer - by building"
      features={features}
      Image="/codeperson.jpg"
      />
    </Layout> 
  )
}
