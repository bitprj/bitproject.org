import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar } from '@components/navbar'
import { Footer } from '@components/footer'
import { Alert } from '@components/alert'

const name = '[Your Name]'
export const siteTitle = 'Bit Project'

export default function Layout({ children, home }) {
  return (
    <div>
      <Alert />
      <Navbar style={{zIndex: '100'}}  />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Democratizing Technical Education"
        />
        <meta
          property="og:image"
          content="/becky.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
