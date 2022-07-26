import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, Link, Box, Button, IconButton, Badge } from '@mui/material'
import { FavoriteBorderOutlined, MenuOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material'


export const Navbar = () => {
  return (
    
      <AppBar position="fixed">
          <Toolbar sx={{ maxWidth: '1920px', margin: '0 auto', width: '100%', height: '90px', marginTop:'1rem', backgroundColor:'white'}}>
              <NextLink href='/' passHref>
                  <Link>
                      <Typography variant='h5' color='secondary'  > GRUPO SDRAZ </Typography>
                  </Link>
              </NextLink>

              <Box flex={ 1 }/>

              <Box sx={{ display: { xs:'none', sm:'block' } }}>
                  <NextLink href='/shows' passHref>
                      <Link>
                          <Button color='primary'> Shows </Button>
                      </Link>
                  </NextLink>
                  <NextLink href='/servicios' passHref>
                      <Link>
                          <Button color='primary'> Servicios </Button>
                      </Link>
                  </NextLink>
                  <NextLink href='/nosotros' passHref>
                      <Link>
                          <Button color='primary'> Nosotros </Button>
                      </Link>
                  </NextLink>
                  <NextLink href='/contacto' passHref>
                      <Link>
                          <Button color='primary'> Contacto </Button>
                      </Link>
                  </NextLink>
              </Box>

              

              <IconButton sx={{ display: { xs:'block', sm:'none' } }}>
                <MenuOutlined></MenuOutlined>
              </IconButton>

          </Toolbar>
      </AppBar>
  )
}
