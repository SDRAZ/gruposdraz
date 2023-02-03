import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { ICompany } from '../interfaces';
import { CompanyCard } from '../ui';

interface Props {
    companies: ICompany[]; 
}

export const CardList: FC<Props> = ({ companies }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box textAlign='center' margin={6} sx={{ margin:{xs:'0rem 1rem 2rem 1rem', md:'6rem 1rem 3rem 1rem'}}}>
        <Typography variant='h4' component='h2' fontWeight={700} >Lleva el entretenimiento a tu vida</Typography>
        <Typography variant='h6' component='p' marginTop={2} lineHeight='20px' >Conoce nuestras diferentes empresas especializadas en cada rama del entretenimiento de eventos.</Typography>    
    </Box>

    <Grid container 
    spacing={ 4 }
    sx={{ width:{ xs:'100%', md:'800px', lg:'1000px'} }}
            >
        {
            companies.map( company => (
                <CompanyCard
                    companies={ company }
                    key={ company.name }
                />

            ))
        }
    </Grid>
    </Box>
  )
}
