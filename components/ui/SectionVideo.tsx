import { Box,CardMedia,Grid,Typography } from '@mui/material'
import React from 'react'

export const SectionVideo = () => {
  return (
    <Grid

        marginTop='8rem'
        display='flex'
        alignItems='center'
        justifyContent='center'
        padding='1rem'
    >
        <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'}, marginTop:{ xs:'1rem', md:'0'} }} className='wrapper2' >
            <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' > Fantasy Show y Gran Kermés </Typography>
                <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Gracias a todos los que nos acompañaron a un día lleno de mucha magia, con un repertorio de nuestros mejores espectáculos y convivencia con los personajes favoritos de los niños. </Typography>
            </Box>

            <Box borderRadius='30px' border='1px solide #D40D84' sx={{marginBottom:{ xs:'1rem', md:'0'}}}>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/AqeYwK5xnME" title="YouTube video player"></iframe>
            </Box>
        </Box>
    </Grid>
  )
}
