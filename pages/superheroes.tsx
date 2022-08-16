import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';


const Ninas = () => {
  
  return (
    <PageLayout title={'Shows de Superhéroes'} pageDescription={'Shows de EsdriKids de Superhéroes'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_02_lsykgt.jpg'}>
    
    <BannerShows 
      imageMobile={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659719808/web/princesas_mobile_jbprmb.jpg' }
      image={ 'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659715889/web/pricesas_ho9bvk.jpg' }
      name={'Superhéroes'} />

      <ShowListDetail shows={ showsData.superheroes as any } color=' rgba(175, 22, 23, 0.9) '></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;