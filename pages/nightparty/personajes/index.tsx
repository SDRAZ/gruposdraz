import { FC } from 'react';
import { PageLayout } from '../../../components/layouts'
import { BannerShows, WhatsappBtn } from '../../../components/ui'

import { showsData } from '../../../data/showsData';

import { ShowListDetail } from '../../../components/shows';
import { BannersData } from '../../../data/bannersData';
import { Grid, Card, CardMedia } from '@mui/material';


const ArtistasImitacion = () => {

  const ImageDesktop = BannersData.personajes[0].desktop
  const ImageMobile = BannersData.personajes[0].mobile
  const BannerName = BannersData.personajes[0].name
  
  return (
    <PageLayout title={'Shows para Niñas'} pageDescription={'Shows de EsdriKids para niñas'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660518776/web/showsninas_kl7acp.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

    <Grid container>
      <Grid   item 
              xs={ 12 } 
              sm={ 12 } 
              md={ 6 } 
              p={1}
              >
              <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                  <CardMedia
                          component="img"
                          image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213494/web/PERSONAJES_01_w06fkm.jpg'}
                          alt={'imageName'}
                          >
                  </CardMedia>
              </Card>
      </Grid> 
      <Grid   item 
              xs={ 12 } 
              sm={ 12 } 
              md={ 6 } 
              p={1}
              >

              <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                  <CardMedia
                          component="img"
                          image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213494/web/PERSONAJES_02_cm8ylz.jpg'}
                          alt={'imageName'}
                          >
                  </CardMedia>
              </Card>
      </Grid>
      <Grid   item 
              xs={ 12 } 
              sm={ 6 } 
              md={ 4 } 
              p={1}
              >

              <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                  <CardMedia
                          component="img"
                          image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213494/web/PERSONAJES_04_dskp92.jpg'}
                          alt={'imageName'}
                          >
                  </CardMedia>
              </Card>
      </Grid>  
      <Grid   item 
              xs={ 12 } 
              sm={ 6 } 
              md={ 4 }
              p={1}
              >

              <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                  <CardMedia
                          component="img"
                          image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213494/web/PERSONAJES_03_j8syrv.jpg'}
                          alt={'imageName'}
                          >
                  </CardMedia>
              </Card>
      </Grid>  
      <Grid   item 
              xs={ 12 } 
              sm={ 6 } 
              md={ 4 }
              p={1}
              >

              <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                  <CardMedia
                          component="img"
                          image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673213493/web/PERSONAJES_05_cl83zv.jpg'}
                          alt={'imageName'}
                          >
                  </CardMedia>
              </Card>
      </Grid>  
    </Grid>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default ArtistasImitacion;