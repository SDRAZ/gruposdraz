import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.videojuegos[0].desktop
  const ImageMobile = BannersData.videojuegos[0].mobile
  const BannerName = BannersData.videojuegos[0].name
  
  return (
    <PageLayout title={'Shows sobre Videojuegos'} pageDescription={'Shows de EsdriKids sobre Videojuegos'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

      <ShowListDetail shows={ showsData.videojuegos as any } color='rgba(81, 17, 126, 0.9);'  title={'Shows'}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;