import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { Hero } from '@components/hero'
import { Featured } from '@components/blog/featured'
import { BlogCard } from '@components/blog/blogcard'

export default function blog() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Featured />
      <BlogCard />
    </Layout>
  )
}
