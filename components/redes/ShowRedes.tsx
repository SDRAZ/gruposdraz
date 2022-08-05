import React from 'react'
import { Box, Typography, Grid, Button, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export const ShowRedes = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
      <Box
      component='img'
      src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659565022/web/hotels_zqntee.png'} 
      width='100%'
      alt='Hotels asociados'
      sx={{ margin:'0', padding:'0' }}
      ></Box>
    
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{ backgroundColor:'#081142'}} width='100%' >

    <Box textAlign='center' margin={6}>
        <Typography variant='h4' component='h3' fontWeight={700} color='#fff' >Cotiza tu próximo show</Typography>
        <Typography color='#fff'>Recibe las mejores noticias antes que todos.</Typography>
    </Box>
    <Box marginTop={ 1 }>
        <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'3rem', paddingRight:'3rem', ":hover":{transform: 'scale(1.1)'} }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
    </Box>


    <Box textAlign='center' margin={ 10 }>
        <Typography variant='h4' component='h3' fontWeight={700} color='#fff' textAlign='center'>Síguenos</Typography>
        <Box display='flex' alignItems='space-betwwen' justifyContent='center'>
            <Link href="https://www.facebook.com/ShowsInfantilesEnCancun" target="_blank" margin='1rem'><FacebookIcon  className='socialicon'fontSize='large' color='info' /> </Link>
            <Link href="https://www.youtube.com/channel/UC9NEPshZGCKB21t-V0TAgxA" target="_blank" margin='1rem'><YouTubeIcon className='socialicon' fontSize='large' color='info' /></Link>
            <Link href="https://www.instagram.com/esdrikidsoficial" target="_blank" margin='1rem' ><InstagramIcon  className='socialicon'fontSize='large' color='info' /></Link>
        </Box>
    </Box>

    </Box>
    </Box>
  )
}
