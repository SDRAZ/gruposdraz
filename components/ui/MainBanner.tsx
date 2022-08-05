import {useState, useEffect} from 'react'
import { Box, Typography, Button } from '@mui/material'

const imageArray = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/PORTADAS-INICIO_uyb6ax.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/GAGA_hict91.jpg'];

const imageArrayMobile = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384709/web/dino_mobile_esvxx0.webp',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719807/web/pitbull_mobile_oyhfbq.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719807/web/mickey_mobile_oapz3e.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719807/web/gaga_mobile_ubr2ly.jpg'];

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
                  <Typography variant='h1' component={'h1'} fontWeight={ 800 } color='#FAD531' lineHeight='50px' > Mas de 100 show diferentes </Typography>
                  <Typography variant='h5' component={'h4'} fontWeight={ 500 }  sx={{ lineHeight:{xs:'28px' ,md:'34px'} }} marginTop='1rem' >15 años organizando los mejores espectáculos del sureste mexicano. </Typography>
        
                  <Box marginTop={3}>
                    <Button sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', paddingLeft:'2rem', paddingRight:'2rem',":hover":{transform: 'scale(1.1)'} }}><Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Cotizar show</Typography></Button>
                  </Box>
              </Box>
            </Box>

            <Box width='100%'>
              { mobile
                ?
                <Box height='800px'>
                  <img
                  src={ imageMobile }
                  alt="Girl in a jacket"
                  style={{objectFit:"cover"}}
                  width='100%'
                  height='90%'
                      >
                  </img>
                </Box>
                :
                <Box>
                    <img
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
