import { PageLayout } from '../components/layouts'
import { BannerShows, WhatsappBtn } from '../components/ui'

import { showsData } from '../data/showsData';
import { ShowListDetail } from '../components/shows';
import { BannersData } from '../data/bannersData';


const Ninas = () => {

  const ImageDesktop = BannersData.superheroes[0].desktop
  const ImageMobile = BannersData.superheroes[0].mobile
  const BannerName = BannersData.superheroes[0].name
  
  return (
    <PageLayout title={'Shows de Superhéroes'} pageDescription={'Shows de EsdriKids de Superhéroes'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660161860/web/COSTUME_UNIVERSE_02_lsykgt.jpg'}>
    
    <BannerShows name={ BannerName } imageMob={ ImageMobile } imageBanner={ ImageDesktop } />

      <ShowListDetail shows={ showsData.superheroes as any } color=' rgba(175, 22, 23, 0.9)'  title={'Shows'}></ShowListDetail>

    <WhatsappBtn />
    </PageLayout>
  )
}
export default Ninas;