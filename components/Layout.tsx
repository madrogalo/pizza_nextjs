/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import GoToCheckoutButton from '../components/buttons/GoToCheckoutButton'

interface ILayout {
  children: JSX.Element
}

function Layout({ children }: ILayout) {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
          />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="true"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"
        />
      </Head>
      <div className={styles.main_container}>
        <div className={styles.header}>
          <div 
            className={styles.header_logo}
            onClick={goToHome}
          >
            <Image 
              height={48} 
              width={316} 
              src='/images/logo.svg' 
              alt="logo" 
            />
          </div>
          <GoToCheckoutButton />
        </div>
        {children}
      </div>
    </>
  )
}

export default Layout