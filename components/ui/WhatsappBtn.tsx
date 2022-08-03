import React from 'react'
import { Button, Link } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsappBtn = () => {
  return (
    <Link href='https://wa.me/5219982396146' target='_blank'>
        <WhatsAppIcon color='info' sx={{ width: "2em", height: "2em" }} className="btnwhats" />
    </Link>
  )
}
