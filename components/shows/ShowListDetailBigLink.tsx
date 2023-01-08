import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { IShowDetail } from '../interfaces';
import { ShowCardDetailBigLink } from '../shows/index';

interface Props {
    shows: IShowDetail[]; 
}

export const ShowListDetailBigLink: FC<Props> = ({ shows }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box textAlign='center' margin={6} sx={{ margin:{xs:'0rem 1rem 2rem 1rem', md:'6rem 1rem 3rem 1rem'}}}>
        <Typography variant='h4' component='h2' fontWeight={700} >Shows</Typography>
    </Box>

    <Grid container spacing={ 4 } sx={{ maxWidth:'1200px', marginBottom:'7rem', padding:{xs:'1rem', md:'1rem', lg:'0rem' } }} >
        {
            shows.map( show => (
                <ShowCardDetailBigLink
                    key={ show.name }
                    show={ show }
                />
            ))
        }
    </Grid>
    </Box>
  )
}
