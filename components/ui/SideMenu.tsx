import { useContext } from "react";

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"

import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import { UiContext } from "../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen ,toggleSideMenu } = useContext(UiContext);
 
    const navigateTo = ( url: string ) => {
        toggleSideMenu()
        router.push(url)
    }

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu } 
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>
                <ListItem button
                onClick={ () => navigateTo('/esdrikids')}
                >
                    <ListItemIcon>
                        <TheaterComedyOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Shows'} />
                </ListItem>

                <ListItem button
                 onClick={ () => navigateTo('/servicios')}>
                    <ListItemIcon>
                        <CelebrationOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Servicios'} />
                </ListItem>

                <ListItem button
                onClick={ () => navigateTo('/nosotros')}
                >
                    <ListItemIcon>
                        <InfoOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Nosotros'} />
                </ListItem>

                <ListItem button
                onClick={ () => navigateTo('/contacto')}
                >
                    <ListItemIcon>
                        <ContactPhoneOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Contacto'} />
                </ListItem>

            </List>
        </Box>
    </Drawer>
  )
}