import { FC } from 'react';
import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsDetails } from '../data/showsDetails';
import { IShowDetail } from '../components/interfaces/showDetail';
import { ShowListDetail } from '../components/shows';


const Ninas = () => {
  
  return (
    <PageLayout title={'Shows para Niñas'} pageDescription={'Shows de EsdriKids para niñas'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660518776/web/showsninas_kl7acp.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={'Niñas'} />

      <ShowListDetail shows={ showsDetails.ninas as any }></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;