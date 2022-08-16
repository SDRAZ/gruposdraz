import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { ICompany } from '../interfaces';
import { ShowCard } from './ShowCard';

interface Props {
    shows: ICompany[]; 
}

export const ShowList: FC<Props> = ({ shows }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box textAlign='center' margin={6} sx={{ margin:{xs:'0rem 1rem 2rem 1rem', md:'6rem 1rem 3rem 1rem'}}}>
        <Typography variant='h4' component='h2' fontWeight={700} >Shows</Typography>
{/*         
        <Typography variant='h6' component='p' marginTop={2} lineHeight='20px' >Conoce nuestras diferentes empresas especializadas en cada rama del entretenimiennto de eventos.</Typography>    
     */}
    </Box>

    <Grid container  
           
            spacing={ 4 } maxWidth='1000px' padding='1rem' >

        {
            shows.map( show => (
                <ShowCard
                    key={ show.name }
                    show={ show }
                />
            ))
        }
    </Grid>
    </Box>
  )
}
