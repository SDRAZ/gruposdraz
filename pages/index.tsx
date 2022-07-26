import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageLayout } from '../components/layouts';
import { Box, CardMedia } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <PageLayout title={'GRUPO SDRAZ'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'}>

        <CardMedia
              className='fadeIn'
              component='img'

              sx={{
                content: {
                    xs: `url(https://res.cloudinary.com/dfmfxdkx4/image/upload/v1658876754/web/banner_mobile_s4g1h7.jpg)`,
                    sm: `url(https://res.cloudinary.com/dfmfxdkx4/image/upload/v1658876283/web/banner_ejemplo_azieye.png)`,  
                }
            }}
              alt={ "banner"}
            />

      </PageLayout>
    </>
  )
}

export default Home
