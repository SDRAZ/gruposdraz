import { FC } from 'react';
import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';

import { ShowListDetail } from '../components/shows';


const Ninas = () => {
  
  return (
    <PageLayout title={'Shows para Niñas'} pageDescription={'Shows de EsdriKids para niñas'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660518776/web/showsninas_kl7acp.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={'Niñas'} />

      <ShowListDetail shows={showsData.ninas as any} color={'rgba(212, 13, 132, 0.9);'}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;