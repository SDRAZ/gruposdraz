import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Box, Grid, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.espectaculos[0].desktop
  const ImageMobile = BannersData.espectaculos[0].mobile
  const BannerName = BannersData.espectaculos[0].name
  
  return (
    <PageLayout title={'Grupo Esdras | Espectáculos'} pageDescription={'Espectáculos del GRUPO ESDRAS.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }    />

    <Grid item={true}
            xs={ 12 } 
            md={ 6 }
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginBottom={ 8 }
            sx={{ paddingLeft:'0', marginTop:{xs:'3rem', md:'7rem'} }} >
                <iframe width="600" height="350" src="https://www.youtube.com/embed/n6-Aw4uyDXA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Grid>


      <ShowListDetailBig shows={ showsData.espectaculos as any }></ShowListDetailBig>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;