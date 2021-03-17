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
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Volunteer',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Partner',
        description: 'Do even more with Assistants, plugins and integrations.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Join Bit Project',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Camp', href: '#' },
]
