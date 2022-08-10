import { FC } from 'react';
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';


interface Props{
    image?: string
    imageName?: string
}

export const EventosDescuentos: FC<Props> = ({image, imageName }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' >

        <Box textAlign='center' margin={6} sx={{ margin:{xs:'7rem 1rem 2rem 1rem', md:'10rem 1rem 3rem 1rem'}}}>
        <Typography variant='h4' component='h2' fontWeight={700} >¡Lo más nuevo!</Typography>
        </Box>

        <Grid container spacing={3} maxWidth='1200px' padding='1rem' marginBottom={10}>
           <Grid   item 
            xs={ 12 } 
            sm={ 12 } 
            md={ 6 } 
            key={ imageName }
            display='flex'
            justifyContent='center'
            >

            <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                <CardMedia
                        component="img"
                        image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660163703/web/Card_bannerroller_b4xlng.jpg'}
                        alt={'imageName'}
                        >
                </CardMedia>
            </Card>
        </Grid> 
        <Grid   item 
            xs={ 12 } 
            sm={ 12 } 
            md={ 6 } 
            key={ imageName }
            display='flex'
            justifyContent='center'
            width='fit-content'
            >

            <Card sx={{ borderRadius:'0px 50px 0px 50px', width:'fit-content'}}>
                <CardMedia
                        component="img"
                        image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660163702/web/Card_banner_casa_bbt2fh.jpg'}
                        alt={'imageName'}
                        >
                </CardMedia>
            </Card>
        </Grid>  


        </Grid>
    </Box>
  )
}
