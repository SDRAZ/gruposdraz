import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { IShowDetail } from '../interfaces';
import { ShowCardDetail } from '../shows';

interface Props {
    shows: IShowDetail[]; 
    color: string;
    title: string;
}

export const ShowListDetail: FC<Props> = ({ shows, color, title }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box textAlign='center' margin={6} sx={{ margin:{xs:'0rem 1rem 2rem 1rem', md:'6rem 1rem 3rem 1rem'}}}>
        <Typography variant='h4' component='h2' fontWeight={700} >{title}</Typography>
      {/*         
        <Typography variant='h6' component='p' marginTop={2} lineHeight='20px' >Conoce nuestras diferentes empresas especializadas en cada rama del entretenimiennto de eventos.</Typography>    
     */}
    </Box>

    <Grid container spacing={ 4 } sx={{ maxWidth:'1200px', marginBottom:'7rem', padding:{xs:'1rem', md:'1rem', lg:'0rem' } }} >
        {
            shows.map( show => (
                <ShowCardDetail
                    key={ show.name }
                    show={ show }
                    color={ color }
                />
            ))
        }
    </Grid>
    </Box>
  )
}
