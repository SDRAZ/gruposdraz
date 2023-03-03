import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid, Box, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';
import { ShowCardDetailBig } from '../components/shows/ShowCardDetailBig';


const Ninas = () => {

  const ImageDesktop = BannersData.servicios[0].desktop
  const ImageMobile = BannersData.servicios[0].mobile
  const BannerName = BannersData.servicios[0].name
  
  return (
    <PageLayout title={'Servicos | Grupo Esdras'} pageDescription={'Servicos del GRUPO ESDRAS.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

            <Grid item={true}
                sx={{ marginTop:{ xs:'0rem', md:'3rem'} }}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/FOTOS-MINIFERIA_q1f3kj.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > MINI FERIA KIDS </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >DISFRUTA DE LOS JUEGOS MÁS DIVERTIDOS DE FERIA INFANTIL CON TODOS TUS INVITADOS. CANICAS, PLINKO, AROS, BOLICHE, PESCA Y BOTES.</Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > 
                        POOL PARTY 
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        DIVIERTETE CON LA VARIEDAD DE ACTIVIDADES QUE TENEMOS EN EL AGUA Y EXTERIOR.
                          </Typography>
                    </Box>

                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/POOL-PARTY_bvkp9n.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/CABALLETES_t0bpcu.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } >
                          CABALLETES
                          </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        DESARROLLA TU LADO ARTÍSTICO Y PLASMA TU IMAGINACIÓN PINTANDO EN NUESTROS CABALLETES.
                          </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > 
                        RALLY
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        COMPITE CON TUS AMIGOS EN UN CIRCUITO DE DISTINTOS JUEGOS COMO: PASAR EL ARO. CORRER EN ZIG ZAG. ARMAR UN MEGA ROMPECABEZAS Y ENTRE OTROS MÁS.
                        </Typography>
                    </Box>

                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/RALLY-JURASICO_vfeamm.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/ESPUMA_ns2hdd.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } >
                          SERVICIO DE ESPUMA
                          </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        CELEBRA TU FIESTA DE UNA MANERA ÚNICA Y LLENA DE ESPUMA Y DIVERSIÓN.
                          </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } > 
                        PINTA CARITAS
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        PONEMOS A TU DISPOSICIÓN EL SERVICIO DE PINTACARITAS CON MAQUILLAJE INFANTIL FANTASÍA.
                        </Typography>
                    </Box>

                    <Box
                    component='img'
                    src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/PINTA-CARITAS_hcikxy.jpg'} 
                    width='100%'
                    alt='Esdri kids'
                    borderRadius='0px 50px 0px'
                    ></Box>
                </Box>
            </Grid>

      {/* <ShowListDetailBig shows={ showsData.servicios as any }></ShowListDetailBig> */}

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;