import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { Grid, Box, Typography } from '@mui/material';


const Ninas = () => {
  
  return (
    <PageLayout title={'Shows de Princesas Disney'} pageDescription={'Shows de EsdriKids con Princesas Disney'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={ 'Princesas' } />

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
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/princess-portada_eiwwsd.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > ¿Quienes somos? </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Gran repertorio para shows entretenimiento de princesas imitación Disney. Las caracteriza su amabilidad, valentía y nobleza.</Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Destacan por su detallada interpretación; maquillaje, peinado y vestuario.</Typography>
                    
                    </Box>
                </Box>
            </Grid>

      <ShowListDetail shows={ showsData.princesas as any } color={' rgba(245, 117, 186, 0.9) '}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;