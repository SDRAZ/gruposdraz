import { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

interface  Props {

}

export const ItemCunter = () => {
  return (
    <Box display='flex' justifyItems='center' alignItems='center' >
        <IconButton>
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{ width: 40, textAlign:'center' }} variant='h6'> 1 </Typography>
        <IconButton>
            <AddCircleOutline />
        </IconButton>
    </Box>
  )
}
