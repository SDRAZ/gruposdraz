import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';


const Ninas = () => {
  
  return (
    <PageLayout title={'Grupo Esdraz | Dinosaurios'} pageDescription={'Dinosaurios del Grupo Esdraz'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161861/web/espectaculos_wdx15u.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384709/web/dino_mobile_esvxx0.webp' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg' }
      name={ 'Dinosaurios' } />

    <Grid item={true}
            xs={ 12 } 
            md={ 6 }
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginBottom={ 8 }
            sx={{ paddingLeft:'0', marginTop:{xs:'3rem', md:'7rem'} }} >
                <iframe width="600" height="350" src="https://www.youtube.com/embed/slsEds73q4Y" title="YouTube video Dinosarios Grupo Esdraz"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </Grid>

    <Grid container maxWidth='1000px' spacing={ 4 } sx={{ marginBottom:'7rem' }} margin='0 auto' >

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Performance' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Se presenta un performance de cazadores y un dinosaurio con pirotecnia.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Búsqueda de huevos' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Se hace una búsqueda de huevos para encontrar a los bebes dinosaurio.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Pega el imán' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Competencia para pegar los dinosaurios en pizarra que se encuentran en los huevos.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Descubrimiento de huesos' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Podrás encontrar entre la arena huesos de dinosaurios..' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Armado de dinosaurio' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Al descubrir los huesos , podrás armar un dinosaurio con ayuda de los cazadores.' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
                    />
              </CardActionArea>
        </Card>

      </Grid>

      <Grid item
            xs={ 12 } 
            sm={ 6 } 
            alignItems='center'
            justifyContent='center'
            marginTop={ 4 }
            >

        <Box marginBottom={ 5 }>
            <Typography textAlign='left'  variant='h5' component='h4' fontWeight='800'>{ 'Rally jurásico' } </Typography>
            <Typography textAlign='left'  variant='subtitle2' component='h4' >{ 'Consiste en un circuito de distintos juegos como: pasar elaro, correr en zigzag, armar un mega rompecabezas y atinarle al dinosaurio..' } </Typography>
        </Box>

        <Card sx={{ borderRadius:'0% 10% 0% 10%', width:'fit-content'}}>
              <CardActionArea sx={{ display:'flex', alignItems:'center', justifyContent:'center' , objectFit:'cover' }}>
                    <Box
                      component='img'
                      height='100%'
                      width='100%'
                      src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg' }
                      alt={ 'Performance' }
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