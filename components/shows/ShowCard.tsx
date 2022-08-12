import { FC, useEffect, useMemo, useState } from 'react'

import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link'
import { IShow } from '../interfaces';

interface Props {
  show: IShow
}

export const ShowCard: FC<Props> =({ show }) => {

  const [count, setCount] = useState(0);

  const imageArray = show.images

  useEffect(() => {

    const timerId = setInterval(() => {
      setCount(count => count + 1);
    }, 4000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];
  



  return (
    <Grid   item 
            xs={ 6 } 
            sm={ 4 } 
            md={ 4 }
            lg={ 3 }
    key={ show.name }

    >
      <Card sx={{ borderRadius:'21% 21% 21% 21%', maxHeight:'400px', width:'fit-content'}}>
      <NextLink href={`esdrikids/${show.linkname}`} passHref prefetch={ false }>
        <Link>
            <CardActionArea sx={{ display:'flex', alignItems:'flex-start', justifyContent:'center' , objectFit:'cover' }}>

                <Box
                sx={{ position:'absolute', margin:{xs:'1rem 0rem 0rem 0rem', md:'1rem 0rem 0rem 0rem'}, width:{xs:'100%', md:'100%'} }}>
                  <Typography
                  textAlign='center'
                  color='#fff' variant='h6'
                  component='h4' fontWeight='800'
                  >{ show.name }
                  </Typography>
                </Box>

               <Box>
                <CardMedia
                width='100%'
                component="img"
                image={ show.icon }
                alt={show.name}
                ></CardMedia>
               </Box>
            </CardActionArea>
        </Link>
      </NextLink>
      </Card>
    </Grid>
  )
}
