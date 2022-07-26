import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageLayout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <>
    <PageLayout title={'GRUPO SDRAZ'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'} />
    </>
  )
}

export default Home
