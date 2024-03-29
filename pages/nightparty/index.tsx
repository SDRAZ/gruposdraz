import { PageLayout } from '../../components/layouts'
import { BannerShows, WhatsappBtn } from '../../components/ui'

import { showsData } from '../../data/showsData';
import { ShowListDetail, ShowListDetailBigLink } from '../../components/shows';
import { Grid, Box, Typography,Link, CardActionArea, Card } from '@mui/material';
import Image from 'next/image';
import { BannersData } from '../../data/bannersData';
import NextLink from 'next/link';

const nightparty = () => {

  const ImageDesktop = BannersData.nightparty[0].desktop
  const ImageMobile = BannersData.nightparty[0].mobile
  const BannerName = BannersData.nightparty[0].name
  
  return (
    <PageLayout title={'Servicos | Grupo Esdras'} pageDescription={'Servicos del GRUPO ESDRAS.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />


      <Box mt={6} p={1}>
      <Typography variant='h5' style={{ textAlign:'center' }}>{'Síguenos en Instagram'}</Typography>
      <Link href={'https://www.instagram.com/nightpartyshowoficial/'}>
          <Typography variant='h6' mb='1rem' style={{ textAlign:'center' }}>{'@nightpartyshowoficial'}</Typography>
      </Link>
      <Grid container maxWidth='1200px' m='0 auto' display='flex' flexDirection='row'>

      <Grid item xs={6} sm={3} p={1}>
      <Link href={'https://www.instagram.com/nightpartyshowoficial/'}>
            <Box
             component='img'
              src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675580147/web/Instagram/288397742_313788107630520_4931307361678995751_n_zjemk3.jpg' }
              alt="Night Party"
              style={{objectFit:"cover"}}
              width='100%'
              height='90%'
            >
            </Box>
      </Link>
      </Grid>

      <Grid item xs={6} sm={3} p={1}>
      <Link href={'https://www.instagram.com/nightpartyshowoficial/'}>
            <Box
            component='img'
              src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675580147/web/Instagram/288164282_759013525129899_394790752449919896_n_j6catz.jpg' }
              alt="Night Party"
              style={{objectFit:"cover"}}
              width='100%'
              height='90%'
            >
          </Box>
      </Link>
      </Grid>

      <Grid item xs={6} sm={3} p={1}>
      <Link href={'https://www.instagram.com/nightpartyshowoficial/'}>
            <Box
            component='img'
              src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675580147/web/Instagram/288296952_719016259344570_8907340998294891480_n_z1vos2.jpg' }
              alt="Night Party"
              style={{objectFit:"cover"}}
              width='100%'
              height='90%'
            >
          </Box>
      </Link>
      </Grid>

      <Grid item xs={6} sm={3} p={1}>
      <Link href={'https://www.instagram.com/nightpartyshowoficial/'}>
            <Box
            component='img'
              src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675580147/web/Instagram/288521889_3241460109406902_1256682168678215510_n_ueiuql.jpg' }
              alt="Night Party"
              style={{objectFit:"cover"}}
              width='100%'
              height='90%'
            >
          </Box>
      </Link>
      </Grid>
      </Grid>
      </Box>

      <Grid
                sx={{ marginTop:{ xs:'0rem', md:'3rem'} }}
                display='flex'
                alignItems='center'
                justifyContent='center'
                padding='1rem'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161862/web/night-party-show_mifleb.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > ¿Quienes somos? </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        Nos dedicamos a Ia organización y animación en tus fiestas y eventos, contamos con artistas y bailarines profesionales, vanqueros, botargas, mas de 15 artistas cabezones, robots, batucadas, accesorios para fiestas, audio, iluminación y DJ.</Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        Obtén el mejor y más entretenido evento, con nuestro gran repertorio de artistas y cantantes imitación mas famosos. Todos tus invitados bailaran y cantaran, al ritmo de las canciones más sonadas de todos los tiempos.
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        Asistimos a todo tipo de eventos, bodas, XV años, posadas, hoteles.
                        </Typography>
                    
                    </Box>
                </Box>
      </Grid>

      <ShowListDetailBigLink shows={ showsData.nightparty as any }></ShowListDetailBigLink>

      <ShowListDetail shows={showsData.serviciosNight as any} color={'rgba(212, 13, 132, 0.9);'}
      title={'Servicios'}
      ></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default nightparty;