import React, { useState, useEffect } from 'react'
import { PageLayout } from '../components/layouts';
import { Banner, BannerShows, WhatsappBtn } from '../components/ui';

import { Box, Grid, ListItem, Typography, ListItemIcon, ListItemText, List } from '@mui/material';
import { ShowList } from '../components/shows';
import { initialDataShows } from '../data/shows';

import DoneIcon from '@mui/icons-material/Done';
import { MainBannerShows } from '../components/ui';
import { BannersData } from '../data/bannersData';

export const Esdrikids = () => {

    const ImageDesktop = BannersData.nosotros[0].desktop
    const ImageMobile = BannersData.nosotros[0].mobile
    const BannerName = BannersData.nosotros[0].name

    const companies = {
        images: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/night-party-show_mifleb.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_02_lsykgt.jpg']
    }

    const [count, setCount] = useState(0);
    const imageArray = companies.images
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setCount(count => count + 1);
      }, 4000);
      return () => clearInterval(timerId);
    }, []);
  
    const image = imageArray[count % imageArray.length];

  return (
    <>
    <PageLayout title={'EsdriKids'} pageDescription={'EsdriKids'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
        {/* <Banner imageMobile={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719807/web/mickey_mobile_oapz3e.jpg'}
        image={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg'} /> */}

        <BannerShows name={ BannerName }
        imageMob={ ImageMobile }
        imageBanner={ ImageDesktop }  />

        <Grid container display='flex' justifyContent='center' alignItems='center'>

            <Grid item={true}
                sx={{ marginTop:{ xs:'0rem', md:'3rem'} }}
                display='flex'
                alignItems='center'
                justifyContent='center'
                padding='1rem'
            >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >

                <Box
                    component='img'
                    src={ image } 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > ¿Quienes somos? </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Empresa dedicada a la organización, producción, logística y marketing de shows con repertorio de 100 personajes de distintas películas, caricaturas y video juegos. Producciones para hoteles, shows de fiestas infantiles y presentaciones en teatros.</Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Contamos con inflables temáticos, pinta caritas, caballetes, mini disco, spa kids, ferias mexicanas, shows para posadas, decoraciones y muchos servicios más. </Typography>
                    
                    </Box>
                </Box>
            </Grid>
        </Grid>

    <WhatsappBtn />
    </PageLayout>
  </>
  )
}

export default Esdrikids;
