import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link'
import { FC, useMemo, useState } from 'react'
import { ICompany } from '../interfaces';

interface Props {
  companies: ICompany
}

export const CompanyCard: FC<Props> =({ companies }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(()=>{
      return isHovered
      ? `${ companies.images[1] }`
      : `${ companies.images[0] }`
  }, [isHovered, companies.images])

  return (
    <Grid   item 
            xs={ 6 } 
            sm={ 6 } 
            md={ 4 }
    key={ companies.name }
    onMouseEnter={ () => setIsHovered(true) }
    onMouseLeave={ () => setIsHovered(false) }
    >
      <Card sx={{ borderRadius:'0px 50px 0px 50px', maxHeight:'400px', width:'fit-content'}}>
      <NextLink href={`/${companies.linkname}`} passHref prefetch={ false }>
        <Link>
            <CardActionArea sx={{ display:'flex', alignItems:'flex-end', justifyContent:'flex-start' , objectFit:'cover' }}>
              
              { companies.logo
                ?
                <Box
                sx={{ position:'absolute', margin:'0rem 0rem 1.5rem 1.5rem', width:{xs:'35%', md:'30%'} }}
                component="img"
                src={ companies.logo }
                alt={companies.logo}
                />
                :
                <Typography
                color='#fff' variant='h6'
                component='h4' fontWeight='600'
                sx={{ position:'absolute', margin:'0rem 0rem 1.5rem 1.5rem'}}
                >{ companies.name }
                </Typography>
              }
              
              <CardMedia
              width='100%'
              component="img"
              image={ productImage }
              alt={companies.name}
              >
              </CardMedia>
            </CardActionArea>
        </Link>
      </NextLink>
      </Card>
    </Grid>
  )
}
