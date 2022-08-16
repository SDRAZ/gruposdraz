import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';


const Ninas = () => {
  
  return (
    <PageLayout title={'Shows Mixtos'} pageDescription={'Shows de EsdriKids Mixtos'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={'Mixto'} />

      <ShowListDetail shows={ showsData.mixto as any } color='rgba(245, 56, 28, 0.9);'></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;