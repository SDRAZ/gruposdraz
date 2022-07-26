import { Box, Typography,  } from '@mui/material';
import { PageLayout } from '../components/layouts';


const Custom404 = () => {
  return (
   <PageLayout title={'Page not found'} pageDescription={'Página no encontrada'}>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            <Typography variant='h1' component='h1' fontSize={70}>404</Typography>
            <Typography variant='h3' component='h3' textAlign='center'>Oops! you went to far!</Typography>
        </Box>
   </PageLayout>
  )
}

export default Custom404
