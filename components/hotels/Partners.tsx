import React from 'react'
import { Box, Typography, Grid, Card, CardMedia, Badge } from '@mui/material';
import { Partner } from './Partner';

export const PartnersSection = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' flexDirection='column' sx={{ backgroundColor:'#081142'}}>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' zIndex='999' marginTop='5rem'>
        <Box textAlign='center'>
        <Typography variant='h4' component='h3' fontWeight={700} color='#fff' sx={{ margin:{xs:'0rem 0rem 3rem 0rem', sm:'0rem 0rem 5rem 0rem', md:'5rem 1rem 3rem 1rem'}}} >Hemos trabajado con grandes cadenas hoteleras</Typography>
        </Box>

        <Grid container spacing={2} maxWidth='1200px' padding='1rem' marginBottom={8}>

        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/logo-hotel_u2l3oe.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/excellence_riviera_cancun_384164_q6julo.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/MPG_ppyrs9.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/logotipo-atelier-playa-mujeres-white_vt49qr.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/Logo-Park-Royal-Hotels-Resorts_sngjma.webp'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/sensira_agmiga.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/Logo-Hilton-CANCUN_nadaye.png'} />
        <Partner src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659502764/web/cunpc_logo_L_vho2xu.webp'} />    
        </Grid>
      </Box>
    </Box>
  )
}
