import { FC, useEffect, useMemo, useState } from 'react'

import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link'
import { ICompany } from '../interfaces';

interface Props {
  companies: ICompany
}

export const CompanyCard: FC<Props> =({ companies }) => {
  
  // const [isHovered, setIsHovered] = useState(false);

  // const productImage = useMemo(()=>{
  //     return isHovered
  //     ? `${ companies.images[1] }`
  //     : `${ companies.images[0] }`
  // }, [isHovered, companies.images])


  const [count, setCount] = useState(0);

  const imageArray = companies.images

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
            sm={ 6 } 
            md={ 4 }
    key={ companies.name }

    >
      <Card sx={{ borderRadius:'0px 50px 0px 50px', maxHeight:'400px', width:'fit-content'}}>
      <NextLink href={`/${companies.linkname}`} passHref prefetch={ false }>
        <Link>
            <CardActionArea sx={{ display:'flex', alignItems:'flex-end', justifyContent:'flex-start' , objectFit:'cover' }}>

                <Box display='flex' flexDirection='row' alignItems='center' zIndex='99'
                sx={{ position:'absolute', margin:{xs:'0rem 0rem 1rem 1rem', md:'0rem 0rem 2rem 2rem'}, width:{xs:'100%', md:'100%'} }}>
                  
                  <Box
                  marginRight={ 1 }
                  sx={{ width:{xs:'10%', md:'10%'} }}
                  component="img"
                  src={ companies.icon }
                  alt={companies.name}
                  />

                  <Typography
                  color='#fff' variant='h6'
                  component='h4' fontWeight='600'
                  
                  >{ companies.name }
                  </Typography>

                </Box>
              
              {/* { companies.logo
                ?
                <Box display='flex' flexDirection='row'  sx={{ position:'absolute', margin:'0rem 0rem 0rem 2rem', width:{xs:'100%', md:'100%'} }}>
                  
                  <Box
                  sx={{ position:'absolute', width:{xs:'10%', md:'10%'} }}
                  component="img"
                  src={ companies.icon }
                  alt={companies.name}
                  />

                  <Typography
                  color='#fff' variant='h6'
                  component='h4' fontWeight='600'
                  sx={{ margin:'0rem 0rem 2rem 3rem'}}
                  >{ companies.name }
                  </Typography>

                </Box>
                :
                <Typography
                color='#fff' variant='h6'
                component='h4' fontWeight='600'
                sx={{ position:'absolute', margin:'0rem 0rem 1.5rem 1.5rem'}}
                >{ companies.name }
                </Typography>
              } */}

              {/* <Box>
                <Box
                sx={{ position:'absolute', margin:'0rem 0rem 1.5rem 1.5rem', width:{xs:'15%', md:'15%'} }}
                component="img"
                src={ companies.icon }
                alt={companies.name}
                />
                <Typography
                color='#fff' variant='h6'
                component='h4' fontWeight='600'
                sx={{ position:'absolute', margin:'0rem 0rem 1.5rem 1.5rem'}}
                >{ companies.name }
                </Typography>
              </Box>
               */}
               <Box>
                <Box  width='100%' height='100%' position='absolute' className='gradient' >
                </Box>
                <CardMedia
                width='100%'
                component="img"
                image={ image }
                alt={companies.name}
                ></CardMedia>
               </Box>
            </CardActionArea>
        </Link>
      </NextLink>
      </Card>
    </Grid>
  )
}
