import { FC } from 'react';
import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';

import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.ninas[0].desktop
  const ImageMobile = BannersData.ninas[0].mobile
  const BannerName = BannersData.ninas[0].name
  
  return (
    <PageLayout title={'Shows para Niñas'} pageDescription={'Shows de EsdriKids para niñas'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660518776/web/showsninas_kl7acp.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop }  />

      <ShowListDetail shows={showsData.ninas as any} color={'rgba(212, 13, 132, 0.9);'}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;