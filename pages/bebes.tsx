import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {
  
  const ImageDesktop = BannersData.bebes[0].desktop
  const ImageMobile = BannersData.bebes[0].mobile
  const BannerName = BannersData.bebes[0].name

  return (
    <PageLayout title={'Shows para Bebés'} pageDescription={'Shows de EsdriKids para Bebés'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

      <ShowListDetail shows={showsData.bebes as any} color='rgba(93, 199, 68, 0.9);' title={'Shows'}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;