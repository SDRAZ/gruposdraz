import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageLayout } from '../components/layouts';
import { Box, Button, CardMedia, Typography } from '@mui/material';

const Home: NextPage = () => {

  const [mobile, setMobile] = useState<boolean | undefined>(true)

  useEffect(() => {
    const updateMobile = () => {

      setMobile(window.innerWidth < 900 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])
  
  return (
    <>
      <PageLayout title={'GRUPO ESDRAZ'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'}>

          <Box width="100%"
          display={'flex'}
          justifyContent={'center'}
          sx={{
            alignItems:{sm:'flex-start', md:'center'},
            
           }}
          >

            <Box maxWidth='1920px' sx={{zIndex:'2', position:'absolute', padding:{ xs:'1rem', md:'2rem'}, marginTop:{ xs:'1rem', md:'0'} }} className='wrapper' >
              <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                  <Typography variant='h1' component={'h1'} fontWeight={ 800 } color='#9747FF' lineHeight='50px' > Mas de 100 show diferentes </Typography>
                  <Typography variant='h5' component={'h4'} fontWeight={ 500 }  lineHeight='36px' marginTop='1rem' >15 años organizando los mejores espectáculos del sureste mexicano. </Typography>
        
                  <Box marginTop={3}>
                    <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'2rem', paddingRight:'2rem' }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
                  </Box>
              </Box>
            </Box>

            <Box width='100%'>
              { mobile
                ?
                <Box height='900px'>
                  <img
                  src="https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384709/web/dino_mobile_esvxx0.webp"
                  alt="Girl in a jacket"
                  style={{objectFit:"cover"}}
                  width='100%'
                  height='90%'
                      >
                  </img>
                </Box>
                :
                <Box>
                    <img
                width='100%'
                src="https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg"
                alt="Show infantil"
                style={{boxSizing:"content-box"}}
                />
                
                </Box>
              }
            </Box>

          </Box>


      </PageLayout>

    </>
  )
}

export default Home