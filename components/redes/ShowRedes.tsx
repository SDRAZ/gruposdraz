import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export const ShowRedes = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'  sx={{ backgroundColor:'#081142'}}  >

    <Box textAlign='center' margin={6}>
        <Typography variant='h4' component='h3' fontWeight={700} color='#fff' >Cotiza tu próximo show</Typography>
        <Typography color='#fff'>Recibe las mejores noticias antes que todos.</Typography>
    </Box>
    <Box marginTop={ 1 }>
        <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'3rem', paddingRight:'3rem' }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
    </Box>


    <Box textAlign='center' margin={ 10 }>
        <Typography variant='h4' component='h3' fontWeight={700} color='#fff' textAlign='center'>Síguenos</Typography>
        <Box marginTop={ 3 }>
            <Button><FacebookIcon fontSize='large' /></Button> 
            <Button><YouTubeIcon fontSize='large' /></Button> 
            <Button><InstagramIcon fontSize='large' /></Button> 
        </Box>
    </Box>

    </Box>
  )
}
