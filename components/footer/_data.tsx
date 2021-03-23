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
      { label: 'For Students', href: '/students',
        badge: (
        <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
          Apply
        </Badge>
      ),},
      { label: 'Partner', href: '/partner' },
      {
        label: 'Volunteer',
        href: '/volunteer',
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            Apply
          </Badge>
        ),
      },
      { label: 'Join', href: '/join' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { label: 'Serverless', href: '/courses/building-with-serverless-functions' },
      { label: 'DevOps School', href: '/courses/devops' },
      { label: 'Data Science', href: '/courses/datascience' },
    ],
  },

]

interface SocialLink {
  label: string
  icon: React.ReactElement
  href: string
}

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: <FaFacebook />, href: '#' },
  { label: 'Instagram', icon: <FaInstagram />, href: '#' },
  { label: 'LinkedIn', icon: <FaLinkedin />, href: '#' },
  { label: 'LinkedIn', icon: <FaTwitter />, href: '#' },
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
