import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.ninos[0].desktop
  const ImageMobile = BannersData.ninos[0].mobile
  const BannerName = BannersData.ninos[0].name
  
  return (
    <PageLayout title={'Shows para Niños'} pageDescription={'Shows de EsdriKids para niños'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_03_aew7ox.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

      <ShowListDetail shows={showsData.ninos as any} color={'rgba(80, 181, 255, 0.9);'} ></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;