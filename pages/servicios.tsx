import { PageLayout } from '../components/layouts'
import { BannerShows, ImageSquereSlider, WhatsappBtn } from '../components/ui'
// import { showsData } from '../data/showsData';
// import { ShowListDetailBig } from '../components/shows';
import { Grid, Box, Typography } from '@mui/material';
import { BannersData } from '../data/bannersData';
// import { ShowCardDetailBig } from '../components/shows/ShowCardDetailBig';


const servicios = () => {

    const servicios = {
        pintaCaritas: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875042/web/Servicios/PINTA-CARITAS_02_anngvx.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/PINTA-CARITAS_hcikxy.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875042/web/Servicios/PINTA-CARITAS_01_wyjaud.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875042/web/Servicios/PINTA-CARITAS_04_l71g1h.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875042/web/Servicios/PINTA-CARITAS_03_gca7g2.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875042/web/Servicios/PINTA-CARITAS_05_hnvlbj.jpg'],
    miniferia: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/FOTOS-MINIFERIA_q1f3kj.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875323/web/Servicios/FERIA_01_skttvl.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875323/web/Servicios/FERIA_02_gfiavw.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875323/web/Servicios/FERIA_03_owe13b.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875323/web/Servicios/FERIA_04_xm0jsk.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875323/web/Servicios/FERIA_05_yaj1j0.jpg',],
    poolParty: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875572/web/Servicios/POOL-PARTY_01_pcrgec.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875572/web/Servicios/POOL-PARTY_02_hbzbfa.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875572/web/Servicios/POOL-PARTY_04_jtxlkt.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875572/web/Servicios/POOL-PARTY_05_wnuagj.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875572/web/Servicios/POOL-PARTY_03_legxe9.jpg',],
    caballetes: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/CABALLETES_t0bpcu.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875762/web/Servicios/CABALLETES_01_la89eq.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875762/web/Servicios/CABALLETES_02_mcksfy.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875762/web/Servicios/CABALLETES_04_iyjwox.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677875762/web/Servicios/CABALLETES_03_fr4ln0.jpg',],
    rally: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/RALLY-JURASICO_vfeamm.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876044/web/Servicios/ESDRINO_02_aomgtt.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876044/web/Servicios/ESDRINO_03_u3m6da.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876044/web/Servicios/ESDRINO_04_vzcn5a.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876045/web/Servicios/ESDRINO_05_lyvpfq.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876044/web/Servicios/ESDRINO_06_usxygs.jpg',],
    espuma: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1675398155/web/Servicios/ESPUMA_ns2hdd.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876233/web/Servicios/FOAM-PARTY_01_lemjbx.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876233/web/Servicios/FOAM-PARTY_02_uffmy6.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876233/web/Servicios/FOAM-PARTY_03_pismtd.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876233/web/Servicios/FOAM-PARTY_04_gtjklf.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677876233/web/Servicios/FOAM-PARTY_05_cwjrgv.jpg',],
    teepees: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885334/web/Servicios/Tepees_01_fwku7q.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885334/web/Servicios/Tepees_02_scvoyv.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885334/web/Servicios/Tepees_03_fjej0x.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885334/web/Servicios/Tepees_04_h5wslp.jpg',],
    roller: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885493/web/Servicios/ROLLER_01_tfpnor.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885493/web/Servicios/ROLLER_02_muabkf.jpg',],
    inflables: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_01_odr8df.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_02_zq7o4n.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_03_iutv2m.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_04_cdtrjp.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_05_lkpr8b.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677885801/web/Servicios/INFLABLES_06_zvr0bn.jpg',],
    regalos: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886167/web/Servicios/REGALO_01_ivgvot.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886167/web/Servicios/REGALO_02_yuun0p.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886167/web/Servicios/REGALO_03_vwfe1d.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886167/web/Servicios/REGALO_04_yaadsi.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886167/web/Servicios/REGALO_05_uavmi6.jpg',],
    cabezones: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886347/web/Servicios/PITBULL_kgncbp.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886346/web/Servicios/DADDY-YANKEE_s08t77.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886346/web/Servicios/BAD-BUNNY_ajklyg.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886346/web/Servicios/LA-MASCARA_qdggiz.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886346/web/Servicios/MICHAEL-JACKSON_upx72w.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886346/web/Servicios/FREDDIE-MERCURY_xyjjsa.jpg',],
    neon: ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NEON_04_jcpzdd.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NEON_01_vxlq6s.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NEON_02_nso1jt.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NEON_05_duaoit.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NOEN_03_dh4p6k.jpg',
    'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677886759/web/Servicios/NEON_06_a4fopd.jpg',]
    }

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
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.miniferia}/>

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

                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.poolParty}/>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.caballetes}/>

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

                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.rally}/>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.espuma}/>

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
                    <Box borderRadius='0px 50px 0px'>
                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.pintaCaritas}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.teepees}/>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } >
                        TEEPEES PARTY
                          </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        FESTEJA DE UNA MANERA ESPECIAL TU CUMPLEAÑOS EN LA COMODIDAD DE UNOS TEPPEES, CON CINE Y  PALOMITAS.
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
                        ROLLER 360º
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        CAPTURA LO MEJOR DE TU EVENTO DE UNA MANERA DIVERTIDA Y COMPÁRTELO EN TUS REDES SOCIALES.
                        </Typography>
                    </Box>
                    <Box borderRadius='0px 50px 0px'>
                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.roller}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.inflables}/>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } >
                        INFLABLES DECORATIVOS
                          </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        TENEMOS UNA VARIEDAD DE INFLABLES TEMÁTICOS PARA QUE TE DIVIERTAS A LO GRANDE.
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
                        ENTREGA DE REGALO
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        SOMOS LOS INDICADOS PARA LLEVAR SORPRESAS Y CREAR UNA EXPERIENCIA ÚNICA.
                        </Typography>
                    </Box>
                    <Box borderRadius='0px 50px 0px'>
                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.pintaCaritas}/>
                    </Box>
                </Box>
            </Grid>

            <Grid item={true}
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                <Box maxWidth='1200px' alignItems='center' sx={{padding:{ xs:'2rem', md:'3rem'} }} className='wrapper' >
                <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.cabezones}/>

                    <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                        <Typography variant='h4' component={'h4'} fontWeight={ 800 } color='primary' lineHeight='30px' marginBottom={ 4 } >
                        CABEZONES
                          </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        NUESTROS PERSONAJES CABEZONES SON PERFECTOS PARA QUE TU EVENTO SEA ORIGINAL Y LA PASEN INCREÍBLE.
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
                        NEON PARTY
                        </Typography>
                        <Typography variant='h6' component={'h6'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'28px'}, color:'#081142' }} marginTop='1rem' >
                        BRILLA EN TU FIESTA NEÓN CON MÁS DE 100 ACCESORIOS, INCREÍBLE DECORACIÓN, PINTURA, INFLABLES Y MÁS.
                        </Typography>
                    </Box>
                    <Box borderRadius='0px 50px 0px'>
                    <ImageSquereSlider boderRadius='0px 50px 0px' imageBanner={servicios.neon}/>
                    </Box>
                </Box>
            </Grid>

      {/* <ShowListDetailBig shows={ showsData.servicios as any }></ShowListDetailBig> */}

    <WhatsappBtn />
    </PageLayout>
  )
}
export default servicios;