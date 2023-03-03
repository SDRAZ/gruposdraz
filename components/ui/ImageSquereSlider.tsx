import {useState, useEffect, FC} from 'react'
import { Box, Typography, Button, Link } from '@mui/material'
import { SeedShowDetail } from '../interfaces';
import { ImageError } from 'next/dist/server/image-optimizer';

interface Props {
  data?: SeedShowDetail[];
  imageBanner: string[],
}

export const ImageSquereSlider:FC<Props> = ({ data, imageBanner  }) => {

    const [mobile, setMobile] = useState<boolean | undefined>(true)

    const [count, setCount] = useState(0);
    useEffect(() => {
      const timerId = setInterval(() => {
        
        setCount(count => count + 1);
      }, 4000);
  
      return () => clearInterval(timerId);
    }, []);

    const image = imageBanner[count % imageBanner.length];
    
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
              <Box
             component='img'
                width='100%'
                src={ image }
                alt="esdras Image"
                style={{boxSizing:"content-box"}}
                />
  )
}
