import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid } from '@mui/material';


const Ninas = () => {
  
  return (
    <PageLayout title={'Grupo Esdraz | Estrenos'} pageDescription={'Estrenos del Grupo Esdraz'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={ 'Estrenos' } />

      <ShowListDetailBig shows={ showsData.estrenos as any }></ShowListDetailBig>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;