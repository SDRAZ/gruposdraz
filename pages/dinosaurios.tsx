import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn, ImageSquereSlider } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

      const ImageDesktop = BannersData.dinosaurios[0].desktop
      const ImageMobile = BannersData.dinosaurios[0].mobile
      const BannerName = BannersData.dinosaurios[0].name

      const dinos = {
            botargas: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825201/web/Dinos/TRICERAPTOR_sgrzsj.jpg',
            'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825201/web/Dinos/TYRANNOSAURUS-REX_etwyjh.jpg',
            'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825201/web/Dinos/NASUTOCERATO_vt1tzq.jpg',
            'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825201/web/Dinos/VELOCIRAPTOR_a8x4vz.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825201/web/Dinos/BLUE_ee5yfh.jpg'],
        paquetes: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825454/web/Dinos/PAQUETE_01_ldxnsn.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825454/web/Dinos/PAQUETE_02_f2llfd.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825454/web/Dinos/PAQUETE_03_dcs5av.jpg',
        'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677825454/web/Dinos/PAQUETE_04_hphtj4.jpg',]
        }
  
  return (
    <PageLayout title={'Grupo Esdras | Dinosaurios'} pageDescription={'Dinosaurios del Grupo Esdras'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

    <Grid item={true}
            xs={ 12 } 
            md={ 6 }
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginBottom={ 8 }
            sx={{ paddingLeft:'0', marginTop:{xs:'3rem', md:'7rem'} }} >
                <iframe width="600" height="350" src="https://www.youtube.com/embed/slsEds73q4Y" title="YouTube video Dinosarios GRUPO ESDRAS."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Grid>

    <Grid container maxWidth='1000px' p={4} sx={{ marginBottom:'7rem' }} margin='0 auto'>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Nuevos Paquetes' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
              <ImageSquereSlider imageBanner={dinos.paquetes}/>
              </Box>
        </Card>
      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Botargas' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
            <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
              <ImageSquereSlider imageBanner={dinos.botargas}/>
            </Box>
        </Card>
      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Performance' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Se presenta un performance de cazadores y un dinosaurio con pirotecnia.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144452/web/PERFORMANCE_mgxvxg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Búsqueda de huevos' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Se hace una búsqueda de huevos para encontrar a los bebes dinosaurio.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144452/web/BU%CC%81SQUEDA-DE-HUEVOS_oa7gla.jpg' }
                      alt={ 'Búsqueda de huevos' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Pega el imán' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Competencia para pegar los dinosaurios en pizarra que se encuentran en los huevos.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144452/web/PEGA-EL-IMA%CC%81N_glsgcu.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Descubrimiento de huesos' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Podrás encontrar entre la arena huesos de dinosaurios..' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144452/web/DESCUBRIMIENTO-DE-HUESOS_yihwip.jpg' }
                      alt={ 'Descubrimiento de huesos' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Armado de dinosaurio' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Al descubrir los huesos , podrás armar un dinosaurio con ayuda de los cazadores.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144451/web/ARMADO-DE-DINOSAURIO_kkg9qy.jpg' }
                      alt={ 'Armado de dinosaurio' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 }
            sx={{ paddingRight:{xs:'0', sm:'40px'} }}
            marginTop={ 4 }
            >

        <Box marginBottom={ 3 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Rally jurásico' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Consiste en un circuito de distintos juegos como: pasar el aro, correr en zigzag, armar un mega rompecabezas y atinarle al dinosaurio..' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673144452/web/RALLY-JURASICO_s9pzod.jpg' }
                      alt={ 'Rally jurásico' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

    </Grid>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;