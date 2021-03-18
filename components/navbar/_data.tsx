import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  {
    label: 'Get Involved',
    children: [
      {
        label: 'For Students',
        description: 'Launch your first idea, with help from us.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Volunteer',
        description: 'Come help shape the next generation of tech leaders.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Partner',
        description: 'Partner with us to help change the world',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Join Bit Project',
        description: 'Join the team making tech accessible',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Camp', href: '/camp' },
]
