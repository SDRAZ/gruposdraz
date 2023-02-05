import {useState, useEffect, FC} from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
import { SeedShowDetail } from '../interfaces';
import { ImageError } from 'next/dist/server/image-optimizer';

// const imageArray = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659384131/web/dino_desktop_ygkqdf.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/PORTADAS-INICIO_uyb6ax.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/mickey_mrb6el.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/GAGA_hict91.jpg'];

// const imageArrayMobile = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_03_nnyy6f.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164355/web/PORTADA_08_qona5y.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_06_m6a6op.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_05_gabal2.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_04_aur1wl.jpg',
// 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660164354/web/PORTADA_02_lpfhez.jpg'];

interface Props {
  data?: SeedShowDetail[];
  name: string,
  imageMob: string[],
  imageBanner: string[],
}

export const BannerShows:FC<Props> = ({ data, imageBanner, imageMob, name  }) => {

    const [mobile, setMobile] = useState<boolean | undefined>(true)

    const [count, setCount] = useState(0);
    useEffect(() => {
      const timerId = setInterval(() => {
        
        setCount(count => count + 1);
      }, 4000);
  
      return () => clearInterval(timerId);
    }, []);

    // const desktop = data.filter(image => image.desktop)
    // const mobileData = data.filter(image => image.mobile)

    const image = imageBanner[count % imageBanner.length];
    const imageMobile = imageMob[count % imageMob.length];
    
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

            <Box maxWidth='1920px' 
            sx={{zIndex:'2', position:'absolute', padding:{ xs:'1rem', md:'2rem'}, marginTop:{ xs:'8rem', md:'0'} }} 
            className='wrapper'>

              <Box color='#FAD531' maxWidth='800px' sx={{ textAlign:{xs:'center', md:'center'}, width:{xs:'100%', md:'800px'} }}>
                <Typography fontWeight={800} variant='h2' component='h1'>{ name }</Typography>
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
