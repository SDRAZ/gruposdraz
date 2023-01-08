import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid, Box, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';


const costumeuniverse = () => {

  const ImageDesktop = BannersData.costume[0].desktop
  const ImageMobile = BannersData.costume[0].mobile
  const BannerName = BannersData.costume[0].name
  
  return (
    <PageLayout title={'Servicos | Grupo Esdraz'} pageDescription={'Servicos del Grupo Esdraz'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1661229256/web/shows_banners/LAPTOP_COSTUMEUNIVERSE_z3yavm.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

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
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673203510/web/shows_banners/COSTUME_UNIVERSE_03_pmo8ou.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > ¿Quienes somos? </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Empresa dedicada a la organización, producción, logística y marketing de shows con repertorio de 100 personajes de distintas películas, caricaturas y video juegos. Producciones para hoteles, shows de fiestas infantiles y presentaciones en teatros.</Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Contamos con inflablestemáticos, pinta caritas, caballetes, mini disco, spa kids, ferias mexicanas, shows para posadas, decoraciones y muchos servicios más. </Typography>
                    
                    </Box>
                </Box>
            </Grid>

      {/* <ShowListDetailBig shows={ showsData.servicios as any }></ShowListDetailBig> */}

    <WhatsappBtn />
    </PageLayout>
  )
}
export default costumeuniverse;