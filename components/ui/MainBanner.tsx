import {useState, useEffect} from 'react'
import { Box, Typography, Button, Link } from '@mui/material'

const imageArray = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/PORTADAS-INICIO_uyb6ax.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/GAGA_hict91.jpg'];

const imageArrayMobile = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_03_nnyy6f.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164355/web/PORTADA_08_qona5y.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_06_m6a6op.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_05_gabal2.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_04_aur1wl.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_02_lpfhez.jpg'];

export const MainBanner = () => {

    const [mobile, setMobile] = useState<boolean | undefined>(true)

    const [count, setCount] = useState(0);
    useEffect(() => {
      const timerId = setInterval(() => {
        
        setCount(count => count + 1);
      }, 4000);
  
      return () => clearInterval(timerId);
    }, []);

    const image = imageArray[count % imageArray.length];
    const imageMobile = imageArrayMobile[count % imageArrayMobile.length];
    
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 900 ? true : false)
    }
    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])
  
  return (
    <>
          <Box width="100%"
          display={'flex'}
          justifyContent={'center'}
          sx={{
            alignItems:{sm:'flex-start', md:'center'},
            
           }}
          >

            <Box maxWidth='1920px' sx={{zIndex:'2', position:'absolute', padding:{ xs:'1rem', md:'2rem'}, marginTop:{ xs:'1rem', md:'0'} }} className='wrapper' >
              <Box color='#fff' maxWidth='650px' sx={{ textAlign:{xs:'center', md:'left'} }}>
                  <Typography variant='h1' component={'h1'} fontWeight={ 800 } color='#FAD531' lineHeight='50px' > Más de 100 show diferentes </Typography>
                  <Typography variant='h5' component={'h4'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'34px'} }} marginTop='1rem' >15 años organizando los mejores espectáculos del sureste mexicano. </Typography>
        
                  <Box marginTop={3}>
                    <Link href='https://wa.me/5219982396146' target='_blank'>
                      <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'3rem', paddingRight:'3rem', ":hover":{transform: 'scale(1.1)'} }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
                    </Link>
                    
                  </Box>
              </Box>
            </Box>

            <Box width='100%'>
              { mobile
                ?
                <Box height='800px'>
                  <Box
             component='img'
                  src={ imageMobile }
                  alt="Girl in a jacket"
                  style={{objectFit:"cover"}}
                  width='100%'
                  height='90%'
                      >
                  </Box>
                </Box>
                :
                <Box>
                    <Box
             component='img'
                width='100%'
                src={ image }
                alt="Show infantil"
                style={{boxSizing:"content-box"}}
                />
                </Box>
              }
            </Box>

          </Box>
    </>
  )
}
