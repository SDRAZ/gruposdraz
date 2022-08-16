import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid } from '@mui/material';


const Ninas = () => {
  
  return (
    <PageLayout title={'Grupo Esdraz | Espectáculos'} pageDescription={'Espectáculos del Grupo Esdraz'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660518776/web/showsninas_kl7acp.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={ 'Espectáculos' } />

    <Grid item={true}
            xs={ 12 } 
            md={ 6 }
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginBottom={ 8 }
            sx={{ paddingLeft:'0', marginTop:{xs:'3rem', md:'5'} }} >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n6-Aw4uyDXA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Grid>

      <ShowListDetailBig shows={ showsData.espectaculos as any }></ShowListDetailBig>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;