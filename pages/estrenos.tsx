import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetailBig } from '../components/shows';
import { Grid } from '@mui/material';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.estrenos[0].desktop
  const ImageMobile = BannersData.estrenos[0].mobile
  const BannerName = BannersData.estrenos[0].name
  
  return (
    <PageLayout title={'Grupo Esdraz | Estrenos'} pageDescription={'Estrenos del Grupo Esdraz'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

      <ShowListDetailBig shows={ showsData.estrenos as any }></ShowListDetailBig>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;