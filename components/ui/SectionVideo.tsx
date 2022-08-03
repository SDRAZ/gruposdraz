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
                <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='50px' > Mas de 100 show diferentes </Typography>
                <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Estamos listos para que vivas grandes momentos en tus eventos especiales. </Typography>
            </Box>

            <Box borderRadius='30px' border='1px solide #D40D84' sx={{marginBottom:{ xs:'1rem', md:'0'}}}>
                <iframe width="100%" height='350px' src="https://www.youtube.com/embed/slsEds73q4Y" title="YouTube esdraz video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Box>
        </Box>
    </Grid>
  )
}
