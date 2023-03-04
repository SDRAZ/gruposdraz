import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { PageLayout } from '../components/layouts';
import { ButtonPrimary, WhatsappBtn } from '../components/ui';

import { ValidationError, useForm } from '@formspree/react';

const handleContactUsRedirect = () => {
    setTimeout(() => {
        let homeURL = window.location.origin;
        window.location.href = `${homeURL}/contacto`
    })
}

const Contacto = () => {

    const [state, handleSubmit] = useForm('xayzjlno');
  if (state.succeeded) {

    handleContactUsRedirect();
    return <div>Gracias por contactarnos</div>;
  }

  return (
    <>
    <PageLayout title={'Contacto'} pageDescription={'Contacta al GRUPO ESDRAS.'} 
    imageFullUrl={'https://res.cloudinary.com/dfmfxdkx4/image/upload/v1659553121/web/PORTADAS_CABEZON_gvk2p4.jpg'}>

    <Grid
    container  
    width='100%'
    justifyContent='space-between'
    maxWidth='1200px' className='contactinfo' 
    >
        <Grid item 
        xs={ 12 } 
        md={ 5 }
        width='100%' display='flex' flexDirection='column' 
        >
            <Typography component='h1' variant='h3' fontWeight={800} sx={{ marginBottom: 3 }}> Contactar </Typography>
                
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    type="name" 
                    name="name"
                   
                    label="Nombre"
                    variant="standard"
                    sx={{ marginBottom: 2 }}
                    required
                />
                <TextField
                fullWidth
                    id="email"
                    type="email" 
                    name="email"

                    label="Email"
                    variant="standard"
                    sx={{ marginBottom: 2 }}
                    
                    required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <TextField
                fullWidth
                    id="message"
                    name="message"

                    label="Mensaje"
                    variant="standard"
                    multiline
                    rows={4}
                    sx={{ marginBottom: 2 }}
                    required
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
              
            <Box marginTop={ 6 }>
                <Button type="submit" disabled={state.submitting}
                    sx={{ background:'linear-gradient(180deg, #D40D84 0%, #51117E 100%)', 
                    paddingLeft:'2rem', paddingRight:'2rem',":hover":{transform: 'scale(1.03)'}, width:'100%' }}>
                    <Typography fontWeight={ 700 } fontSize='15px' lineHeight='36px'>Enviar mensaje</Typography>
                </Button>
                </Box>
            </form>

            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form> */}

        </Grid>

        <Grid item 
        xs={ 12 } 
        md={ 6 }
        width='100%' sx={{ marginTop:{xs:'3rem', md:'0'} }} >
                <Box display='flex' marginBottom={1}>
                    <Typography fontWeight={800} marginRight={1}>Número:</Typography> <a href="tel:9981913313"> <Typography>+529981913313</Typography> </a>
                </Box>
                <Box display='flex' marginBottom={2} >
                    <Typography fontWeight={800} marginRight={1}>Dirección:</Typography><Typography>Supermanzana 43, 77506 Cancún, Q.R., México</Typography>
                </Box>
                <Box
                    component='iframe'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476307.7789040907!2d-86.836425!3d21.146248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac8c03e106f04412!2sEsdrikids!5e0!3m2!1ses-419!2sus!4v1660061421179!5m2!1ses-419!2sus"
                    loading="lazy"
                    width='100%'
                    height='500px'
                    border=' 2px solid #51117E'
                />
        </Grid>
    </Grid>

    <WhatsappBtn />
    </PageLayout>
  </>
  )
}

export default Contacto;