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
    title: 'Product',
    links: [
      { label: 'How it works', href: '#' },
      { label: 'Features', href: '#' },
      {
        label: 'Integrations',
        href: '#',
        badge: (
          <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
      { label: 'Pricing', href: '#' },
      { label: 'Examples', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Learn Center', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Slack Community', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Media Kit', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Email us', href: '#' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Start for free', href: '#' },
      { label: 'Sign in', href: '#' },
      { label: 'Download MacOS', href: '#' },
      { label: 'Download Windows', href: '#' },
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
