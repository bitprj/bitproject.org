import Layout from '@components/layout'
import {Landing} from '@components/landing'
import { TestimonialTwo } from '@components/testimonial/two'
import { Feature } from '@components/feature'

export default function Page() {
  return (
      <Layout>
        <Landing
            heading="Building with Serverless Functions"
            description="Use Serverless Functions to engineer problem-solving projects by integrating and building various data-rich APIs."
            cta1="Learn More"
            cta2="Student Projects"
            image="/serverless.png"
            cta1link="https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017"
        />
        <TestimonialTwo
            Name1="Daniel Kim"
            Role1="Student at McKinley High"
            Image1="/becky.svg"
            Quote1="We had a great time at Bitcamp WOOO"
            Name2="Daniel Kim"
            Role2="Student at NYADA"
            Image2="/daniel.png"
            Quote2="Did you know that platypuses are cool and they are the username of Daniel"
        /> 
        {/* <Feature
          Heading="Upcoming Events"
          features={events}
          Image={image}
          /> */}
      </Layout>
      
  );
}