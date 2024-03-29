import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid, Box, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';
import Link from 'next/link';


const costumeuniverse = () => {

  const ImageDesktop = BannersData.costume[0].desktop
  const ImageMobile = BannersData.costume[0].mobile
  const BannerName = BannersData.costume[0].name
  
  return (
    <PageLayout title={'Servicos | GRUPO ESDRAS'} pageDescription={'Servicos del GRUPO ESDRAS.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1661229256/web/shows_banners/LAPTOP_COSTUMEUNIVERSE_z3yavm.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

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
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1673203510/web/shows_banners/COSTUME_UNIVERSE_03_pmo8ou.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'}, marginBottom:{ xs:'2rem', md:'0'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > ¿Quienes somos? </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Empresa dedicada a la organización, producción, logística y marketing de shows con repertorio de 100 personajes de distintas películas, caricaturas y video juegos. Producciones para hoteles, shows de fiestas infantiles y presentaciones en teatros.</Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >Contamos con inflables temáticos, pinta caritas, caballetes, mini disco, spa kids, ferias mexicanas, shows para posadas, decoraciones y muchos servicios más. </Typography>
                    
                    </Box>
                </Box>
      </Grid>


      <Typography variant='h5' style={{ textAlign:'center' }}>{'Síguenos en Instagram'}</Typography>
      <Link href={'https://www.instagram.com/disfracesuniverse/'}>
        <a target="_blank">
          <Typography variant='h6' mb='1rem' style={{ textAlign:'center' }}>{'@disfracesuniverse'}</Typography>
        </a>
      </Link>

      <Grid container maxWidth='1200px' m='0 auto' display='flex' flexDirection='row' mb={3} p={1}>

        <Grid item xs={6} sm={3} p={1}>
        <Link href={'https://www.instagram.com/disfracesuniverse/'}>
        <a target="_blank">
              <Box
             component='img'
                src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675577278/web/Instagram/313302315_686071129381941_296635509913190529_n_kdcane.jpg' }
                alt="Costume Universe"
                style={{objectFit:"cover"}}
                width='100%'
                height='90%'
              >
            </Box>
        </a>
      </Link>
        </Grid>

        <Grid item xs={6} sm={3} p={1}>
        <Link href={'https://www.instagram.com/disfracesuniverse/'}>
        <a target="_blank">
              <Box
             component='img'
                src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675577278/web/Instagram/313903526_898956368154960_714121114319119087_n_ekysaq.jpg' }
                alt="Costume Universe"
                style={{objectFit:"cover"}}
                width='100%'
                height='90%'
              >
            </Box>
            </a>
      </Link>
        </Grid>

        <Grid item xs={6} sm={3} p={1}>
        <Link href={'https://www.instagram.com/disfracesuniverse/'}>
        <a target="_blank">
              <Box
             component='img'
                src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675577278/web/Instagram/311746724_648777493524026_6565564537250598039_n_fwwzk8.jpg' }
                alt="Costume Universe"
                style={{objectFit:"cover"}}
                width='100%'
                height='90%'
              >
            </Box>
            </a>
      </Link>
        </Grid>

        <Grid item xs={6} sm={3} p={1}>
        <Link href={'https://www.instagram.com/disfracesuniverse/'}>
        <a target="_blank">
              <Box
             component='img'
                src={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675577278/web/Instagram/309881542_178056831410532_8066403287666155678_n_z7qiq2.jpg' }
                alt="Costume Universe"
                style={{objectFit:"cover"}}
                width='100%'
                height='90%'
              >
            </Box>
            </a>
      </Link>
        </Grid>

      </Grid>

      {/* <ShowListDetailBig shows={ showsData.servicios as any }></ShowListDetailBig> */}

    <WhatsappBtn />
    </PageLayout>
  )
}
export default costumeuniverse;