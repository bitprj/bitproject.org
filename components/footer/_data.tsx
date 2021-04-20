import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export interface LinkGroupData {
  title: string
  links: Array<{
    label: string
    href: string
    badge?: React.ReactElement
  }>
}

export const links: LinkGroupData[] = [
  {
    title: 'Get Involved',
    links: [
      { label: 'Students', href: '/students',
        badge: (
        <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
          Apply
        </Badge>
      ),},
      { label: 'Partner', href: '/partners',
        badge: (
        <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
          Join Us
        </Badge>
      ),},
      {
        label: 'Volunteers',
        href: '/volunteer',
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            Apply
          </Badge>
        ),
      },
      { label: 'Join', href: '/join',
        badge: (
        <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
          Join Us
        </Badge>
      ),},
    ],
  },
  {
    title: 'Courses',
    links: [
      { label: 'Serverless', href: '/course/serverless' },
      { label: 'DevOps School', href: '/course/devops' },
      { label: 'Data Science', href: '/course/datascience' },
    ],
  },

]

interface SocialLink {
  label: string
  icon: React.ReactElement
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/bitproject.org' },
  { label: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/bitprojectorg' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/bitprojectorg' },
  { label: 'Twitter', icon: <FaTwitter />, href: 'https://www.twitter.com/bitprj' },
]

interface FooterLink {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Offer terms', href: '#' },
  { label: 'Legal notice', href: '#' },
  { label: 'Sitemap', href: '#' },
]
