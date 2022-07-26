import { FC } from 'react'
import { Button, Typography } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';

interface Props {
    cta: string
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    textColor?: string
    endIcon?: JSX.Element
    startIcon?: JSX.Element
    width: string
    height: string
}

export const ButtonPrimary: FC<Props> = ( { cta, color, endIcon, startIcon, width, height } ) => {
  return (
    <Button sx={{ width:{ width }, height:{ height } }} color={ color }>
        { startIcon }
        <Typography mr={ 1 } ml={ 1 }variant='subtitle1'  >{ cta }</Typography>
        { endIcon }
    </Button>
  )
}

export default ButtonPrimary;