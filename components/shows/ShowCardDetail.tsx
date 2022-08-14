import { FC } from 'react'
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { IShowDetail } from '../interfaces';

interface Props {
  show: IShowDetail
}

export const ShowCardDetail: FC<Props> =({ show }) => {

  return (
    <Grid   item 
            xs={ 6 } 
            sm={ 6 } 
            md={ 3 }

    key={ show.name }
    >
      <Card sx={{ borderRadius:'0% 10% 0% 10%', maxHeight:'400px', width:'fit-content'}}>

            <CardActionArea sx={{ display:'flex', alignItems:'flex-end', justifyContent:'center' , objectFit:'cover' }}>

                  <Box
                    component='img'
                    height='100%'
                    width='100%'
                    src={ show.images }
                    alt={ show.name }
                  />
                  

    º             <Box width='100%' height='25%' position='absolute' className='gradient2' ></Box>
                  <Box
                    sx={{ position:'absolute', margin:{ xs:'0rem 0rem 1rem 0rem', sm:'0rem 0rem 1rem 0rem',  md:'0rem 0rem 1rem 0rem'}, width:{xs:'100%', md:'100%' } }}>
                    <Typography
                    textAlign='center'
                    color='#fff' variant='h6'
                    component='h4' fontWeight='800'
                    >{ show.name }
                    </Typography>
                  </Box>
                  
             

            </CardActionArea>

      </Card>
    </Grid>
  )
}
