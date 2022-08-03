import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PageLayout } from '../components/layouts';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import {MainBanner, SectionVideo, WhatsappBtn} from '../components/ui';
import { CardList } from '../components/Servicios/CardList';
import { initialData } from '../data/empresas';
import { EventosDescuentos } from '../components/eventos/EventosDescuentos';
import { PartnersSection } from '../components/hotels/Partners';
import { ShowRedes } from '../components/redes/ShowRedes';

const Home: NextPage = () => {


  
  return (
    <>
      <PageLayout title={'GRUPO ESDRAZ'} pageDescription={'15 años organizando los mejores espectáculos del sureste mexicano.'}>

      <MainBanner />
      <CardList companies={ initialData.company as any }/>
      <SectionVideo />
      <EventosDescuentos image={''} imageName={''} />
      <PartnersSection />
      <ShowRedes />
      
      <WhatsappBtn />

      </PageLayout>
    </>
  )
}

export default Home