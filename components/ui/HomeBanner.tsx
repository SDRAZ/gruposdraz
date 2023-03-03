import {useState, useEffect} from 'react'
import { Box, Typography, Button, Link } from '@mui/material'

const imageArray = ['https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677821404/web/home_banners/BANNER_-PROX.HOTEL_wuhok7.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677821404/web/home_banners/BANNER_ESDRILAND_cdu81w.jpg',
'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1677821404/web/home_banners/Banners_inflables_gecjhb.png'];

export const HomeBanner = () => {
    const [mobile, setMobile] = useState<boolean | undefined>(true)
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timerId = setInterval(() => {
        setCount(count => count + 1);
      }, 4000);
  
      return () => clearInterval(timerId);
    }, []);

    const image = imageArray[count % imageArray.length];
    
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
            <Box width='100%'>
            <Box>
             <Box
             component='img'
             mb='50px'
                width='100%'
                src={ image }
                alt="Show infantil"
                style={{boxSizing:"content-box"}}
                />
                </Box>
            </Box>

          </Box>
    </>
  )
}
