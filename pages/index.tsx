import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageLayout } from '../components/layouts';
import { Box, Button, CardMedia, Typography } from '@mui/material';

const Home: NextPage = () => {

  // const [mobile, setMobile] = useState(undefined)

  // useEffect(() => {
  //   const updateMobile = () => {
  //     setMobile(window.innerWidth < 600 ? true : false)
  //   }

  //   updateMobile()
  //   window.addEventListener('resize', updateMobile)
  //   return () => {
  //     window.removeEventListener('resize', updateMobile)
  //   }
  // }, [])
  
  return (
    <>
      <PageLayout title={'GRUPO SDRAZ'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'}>

        {/* <CardMedia
            component="img"
            className='fadeIn'
            sx={{
                objectFit: 'cover',
                content: {
                    xs: `url(https://res.cloudinary.com/dfmfxdkx4/image/upload/v1658876754/web/banner_mobile_s4g1h7.jpg)`,
                    sm: `url(https://res.cloudinary.com/dfmfxdkx4/image/upload/v1658876283/web/banner_ejemplo_azieye.png)`,  
                }
            }}
              alt={ "banner"}
        ></CardMedia> */} 
         {/* <div>
          { mobile
            ? <Box display={"flex"}>
              <Typography variant='h1'>Mas de 100 show diferentes</Typography>
              <img
              src="https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659033391/web/main_1_mobile_hwgybj.jpg"
              alt="Girl in a jacket"
              width="110%" height="object-fit"
              style={{objectFit: 'cover'}}
                  >
              </img>
            </Box>
            : <Box>
            <img
              src="https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659033020/web/main_1_dppn5i.jpg"
              alt="Girl in a jacket"
              width={'100%'} height={'600px'}
              style={{objectFit: 'cover'}}
                  >
              </img>
            </Box>
          }
          </div> */}

          <Box 
          display='flex'
          width="100%"
          justifyContent='center' 

          style={{ background:'linear-gradient(180deg, #040243 0%, #033276 100%)'}} 
          sx={{alignItems:{ xs:'flex-end', md:'center' }, boxSizing:"content-box"}}
          >

            <Box
            display='flex'
            alignItems='center'
            justifyContent='center' 
            gap={ 2 } color='white' 
            sx={{ flexDirection:{xs:"column", md:'row'}, textAlign:{ xs:'center', md:'left'}, marginTop:{ xs:'4rem', md:'0'} }}
            >
              <Box sx={{ marginLeft:{xs:"0", md:'1.5rem' } }}  maxWidth='600px'>
                <Typography component={'h1'} fontWeight={ 800 } color='#9747FF' fontSize='46px' lineHeight='50px' > Mas de 100 show diferentes </Typography>
                <Typography component={'h4'} fontWeight={ 500 }  fontSize='28px' lineHeight='36px' marginTop='1rem' >15 años organizando los mejores espectáculos del sureste mexicano. </Typography>
               
                <Box marginTop={3}>
                  <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'2rem', paddingRight:'2rem' }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
                </Box>
              </Box>

              <Box sx={{ width:{xs:"100%", md:'600px'} }}
              display='flex'
              alignItems='flex-end'
               >
                <img
                width='100%'
                src="https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659043845/web/image_test_cosaxx.png"
                alt="Show infantil"
                style={{boxSizing:"content-box"}}
                />
              </Box>
            </Box>

          </Box>





      </PageLayout>

    </>
  )
}

export default Home