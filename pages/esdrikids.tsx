import React from 'react'
import { PageLayout } from '../components/layouts';
import { Banner, WhatsappBtn } from '../components/ui';

import { Box, Grid, ListItem, Typography, ListItemIcon, ListItemText, List } from '@mui/material';
import { ShowList } from '../components/shows';
import { initialDataShows } from '../data/shows';

import DoneIcon from '@mui/icons-material/Done';

export const esdrikids = () => {
  return (
    <>
    <PageLayout title={'Contacto'} pageDescription={'Contacta al GRUPO ESDRAZ.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
        <Banner imageMobile={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719807/web/mickey_mobile_oapz3e.jpg'}
        image={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg'} />

        <Grid item
        sx={{ marginTop:{ xs:'0rem', md:'3rem'} }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        padding='1rem'
        >
            <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <Box
                component='img'
                src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161147/web/mickey-y-minnie_mxnaeg.jpg'} 
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
        
        <ShowList shows={ initialDataShows.company as any } ></ShowList>

        <Grid item
            sx={{ marginTop:{ xs:'0rem', md:'3rem'} }}
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper3' >
                <Box color='primary' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                    <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > Nuestros shows incluyen </Typography>
                    
                    <List>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='Presentación de obra musical o performance con los personajes.' />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='Concursos, bailes y premios.' />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='Animador caracterizado' />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='DJ con equipo de sonido' />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='Organización de pastel y piñata' />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DoneIcon color='primary' /> </ListItemIcon>
                            <ListItemText primary='Efectos especiales, maquina de burbujas o humo.' />
                        </ListItem>
                    </List>
                    
                </Box>
                <Box
                component='img'
                src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_03_aew7ox.jpg'} 
                width='100%'
                alt='Esdri kids'
                borderRadius='0px 50px 0px'
                ></Box>
            </Box>
        </Grid>

        <Grid  item
        xs={ 12 } 
        md={ 6 }
        display='flex'
        justifyContent='center'
        width='100%'
        marginBottom={ 8 }
        sx={{ paddingLeft:'0', marginTop:{xs:'3rem', md:'5'} }} >
            <iframe width="600" height="350" src="https://www.youtube.com/embed/AqeYwK5xnME" title="YouTube video player"></iframe>
        </Grid>



    <WhatsappBtn />
    </PageLayout>
  </>
  )
}

export default esdrikids;
