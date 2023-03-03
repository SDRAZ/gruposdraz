
import type { NextPage } from 'next'
import { PageLayout } from '../components/layouts';
import { Box } from '@mui/material';
import { MainBanner, SectionVideo, WhatsappBtn, HomeBanner} from '../components/ui';
import { CardList } from '../components/Servicios/CardList';
import { initialData } from '../data/empresas';
import { EventosDescuentos } from '../components/eventos/EventosDescuentos';

const Home: NextPage = () => {

  return (
    <>
      <PageLayout title={'GRUPO ESDRAS'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'} 
      imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>

      <MainBanner />
      <CardList companies={ initialData.company as any }/>
      <SectionVideo />
      <EventosDescuentos image={''} imageName={''} />

      <HomeBanner />
      
      <Box
      component='img'
      src={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1660165133/web/hotels_ztxlmc.png'} 
      width='100%'
      alt='Hotels asociados'
      sx={{ margin:'0', padding:'0', marginBottom: '-1rem' }}
      ></Box>

      <WhatsappBtn />

      </PageLayout>
    </>
  )
}

export default Home