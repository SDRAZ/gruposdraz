import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.mixto[0].desktop
  const ImageMobile = BannersData.mixto[0].mobile
  const BannerName = BannersData.mixto[0].name
  
  return (
    <PageLayout title={'Shows Mixtos'} pageDescription={'Shows de EsdriKids Mixtos'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

      <ShowListDetail shows={ showsData.mixto as any } color='rgba(245, 56, 28, 0.9);'></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;