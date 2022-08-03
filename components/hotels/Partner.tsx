import { FC } from 'react'
import { Grid, Box } from '@mui/material'

interface Props {
    src: string
}

export const Partner:FC<Props> = ({ src }) => {
  return (
    <Grid   item 
    xs={ 6 } 
    sm={ 4 } 
    md={ 3 } 
    display='flex'
    justifyContent='center'
    alignItems='center'
    >
        <Box
        component="img"
        width='150px'
        src={ src }
        alt={'imageName'}
        />
    </Grid> 
  )
}
