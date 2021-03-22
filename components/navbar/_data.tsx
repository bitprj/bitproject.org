import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { FcTwoSmartphones,FcGraduationCap,FcStatistics,FcElectricity,FcConferenceCall,FcCollaboration } from 'react-icons/fc'

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
        href: '/students',
        icon: <FcGraduationCap />,
      },
      {
        label: 'Volunteer',
        description: 'Come help shape the next generation of tech leaders.',
        href: '/volunteer',
        icon: <FcCollaboration />,
      },
      {
        label: 'Partner',
        description: 'Partner with us to help change the world',
        href: '/partner',
        icon: <FcTwoSmartphones />,
      },
      {
        label: 'Join Bit Project',
        description: 'Join the team making tech accessible',
        href: '/join',
        icon: <FcConferenceCall />,
      },
    ],
  },
  {
    label: 'Courses',
    children: [
      {
        label: 'Serverless',
        description: 'Come help shape the next generation of tech leaders.',
        href: '/course/building-with-serverless-functions',
        icon: <FcElectricity />,
      },
      {
        label: 'Data Science',
        description: 'Partner with us to help change the world',
        href: '/data-science',
        icon: <FcStatistics />,
      },
    ],
  },
  { label: 'Camp', href: '/camp' },
  { label: 'Blog', href: '/blog' },
]
