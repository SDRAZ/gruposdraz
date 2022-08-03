import React from 'react'
import { AppBar,Link, Toolbar, Box, Button, IconButton, Typography } from '@mui/material'
import NextLink from 'next/link'

export const Footer = () => {
  return (
        <Toolbar sx={{ backgroundColor:'#081142', paddingBottom:'2rem', display:'flex', flexDirection:{xs:'column', md:'row'}, textAlign:{xs:'center', md:'right'} }}>
            <NextLink href='/' passHref>
                <Link >
                <svg width="145" height="50" viewBox="0 0 157 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.9623 4.00918L24.9624 4.00918C26.8676 4.61632 27.1687 4.71228 26.7625 4.78712L26.7516 4.79795C26.5913 4.82326 26.3209 4.84528 25.8942 4.88003C25.2258 4.93446 24.1741 5.02012 22.5617 5.19854C19.9308 5.50169 15.7949 6.04303 12.7418 7.95936C9.68863 9.8757 7.71816 13.1562 6.51638 16.4909C5.31461 19.8147 4.87071 23.1926 4.9465 26.6247C5.02229 30.0568 5.62859 33.543 6.57052 36.5745C7.52327 39.6169 8.81166 42.2045 10.4032 44.4456C11.9947 46.6759 13.8894 48.5598 16.8884 49.5558C19.8874 50.5411 24.0016 50.6493 26.2536 50.7035C28.5056 50.7576 28.8953 50.7793 29.0144 50.8226C29.1335 50.8659 28.9819 50.9308 27.293 51.6346C25.6148 52.3491 22.3884 53.7025 18.9239 54.5686C15.4593 55.4348 11.7457 55.8137 9.32052 55.8678C6.89532 55.922 5.74768 55.6513 4.77327 54.5362C3.79886 53.421 2.98685 51.4722 2.1965 48.1917C1.40615 44.9111 0.61579 40.3206 0.258507 34.8856C-0.109604 29.4505 -0.0446422 23.1818 0.204374 18.667C0.464216 14.1523 0.897288 11.3915 1.41697 9.13948C1.93666 6.88751 2.5213 5.1444 3.29 3.74775C4.05871 2.35109 5.01146 1.3009 6.4839 0.727079C7.95634 0.15326 9.9593 0.044992 11.5833 0.174913C13.2073 0.304835 14.4524 0.672945 16.8776 1.43082C18.5255 1.95081 20.7084 2.64914 22.5583 3.24098L22.5586 3.24106C23.4433 3.52411 24.2519 3.78278 24.8894 3.98594L24.9623 4.00918ZM32.2516 22.0017L15.8599 24.1454C15.5243 21.7527 16.4878 18.8078 17.5705 17.2704C18.7182 15.6464 20.5479 14.5312 23.1355 14.1847C29.4475 13.3511 32.3815 19.6631 32.2516 22.0017ZM21.1325 40.169C18.6099 38.4259 17.04 35.0804 16.6394 32.1031H16.6502L45.2113 28.2379L44.8865 24.9466C44.7749 24.6316 44.6197 23.6687 44.4761 22.7781L44.476 22.7778L44.4759 22.7772L44.4759 22.7771C44.3826 22.1983 44.2943 21.6502 44.226 21.3304C43.3081 17.1561 42.3902 15.5308 41.5614 14.0631C41.1584 13.3496 40.7765 12.6733 40.4258 11.7595C42.0932 12.2792 48.0695 17.1838 49.2497 18.2556C56.8392 25.1523 58.6581 29.3422 50.6571 36.8777C48.914 38.5125 43.8254 42.9731 41.9849 43.6227C42.355 42.5765 42.6479 42.1315 42.9385 41.6899C43.5322 40.7878 44.1166 39.9 45.3304 33.9328C44.1178 33.9328 36.6689 34.918 35.7703 35.2861C34.6624 35.7435 34.0769 36.4443 33.4014 37.2528C32.6378 38.1668 31.759 39.2185 29.8806 40.2123C27.3904 41.5332 23.4711 41.7822 21.1325 40.169ZM138.42 42.99L138.4 42.9899V33.32C138.4 31.92 137.91 30.72 136.93 29.74C135.95 28.75 134.76 28.26 133.37 28.26H127.37C125.98 28.26 124.79 28.76 123.81 29.74C122.83 30.73 122.34 31.92 122.34 33.32V43C124 43 125.16 41.95 125.83 39.85H134.2C134.2 38.79 133.68 37.87 132.63 37.11C131.58 36.34 130.32 35.96 128.85 35.96H126.18V33.32C126.18 32.54 126.58 32.15 127.36 32.15H133.42C134.2 32.15 134.59 32.54 134.59 33.32V37.63C134.61 39.11 134.99 40.37 135.73 41.42C136.455 42.4634 137.349 42.9834 138.4 42.9899V43L138.42 42.99ZM120.06 33.39C120.06 34.79 119.57 35.98 118.59 36.97C117.61 37.95 116.42 38.45 115.03 38.45H112.55C112.78 38.89 113.12 39.11 113.56 39.11H114.61C116.08 39.11 117.34 39.49 118.39 40.26C119.44 41.02 119.96 41.94 119.96 43H113.57C112.28 43 111.15 42.56 110.18 41.67C109.21 40.78 108.66 39.71 108.53 38.43C108.53 37.36 109.05 36.46 110.08 35.74C111.11 35.01 112.38 34.62 113.88 34.57H115.04C115.81 34.54 116.2 34.16 116.2 33.4V33.32C116.2 32.54 115.81 32.15 115.03 32.15H109C108.22 32.15 107.83 32.54 107.83 33.32V36.58C107.8 38.13 107.43 39.57 106.71 40.89C105.91 42.29 105.01 42.99 104 42.99V33.31C104 31.91 104.49 30.72 105.47 29.73C106.45 28.75 107.64 28.25 109.03 28.25H115.03C116.42 28.25 117.61 28.74 118.59 29.73C119.57 30.71 120.06 31.91 120.06 33.31V33.39ZM79.38 37.72C79.32 37.06 78.94 36.73 78.22 36.73H72.57C71.1 36.73 69.84 36.35 68.79 35.59C67.74 34.83 67.22 33.92 67.22 32.84H78.23C79.62 32.84 80.81 33.33 81.79 34.32C82.73 35.26 83.22 36.4 83.26 37.72H79.38ZM83.22 38.62C83.08 39.73 82.61 40.69 81.79 41.51C80.81 42.49 79.62 42.99 78.23 42.99H67.19C67.19 41.91 67.71 41 68.76 40.24C69.81 39.48 71.06 39.1 72.54 39.1H78.23C78.73 39.1 79.07 38.94 79.24 38.62H83.22ZM83.26 28.26C83.26 29.32 82.74 30.23 81.7 30.98C80.66 31.73 79.41 32.11 77.94 32.11H67.19C67.19 31.05 67.71 30.14 68.75 29.39C69.79 28.64 71.04 28.26 72.51 28.26H83.26ZM85.99 42.98C85.99 42.01 86.51 41.19 87.56 40.52C88.61 39.85 89.86 39.5 91.34 39.48H95.64C96.41 39.48 96.8 39.12 96.8 38.41V32.88C96.8 32.17 96.41 31.81 95.64 31.81H93.01V34.25C93.01 35.59 92.63 36.74 91.87 37.7C91.11 38.66 90.2 39.13 89.14 39.13V31.49C87.05 30.88 86 29.81 86 28.3H95.64C97.03 28.3 98.22 28.75 99.2 29.64C100.18 30.54 100.67 31.62 100.67 32.9V38.39C100.67 39.66 100.18 40.75 99.2 41.65C98.22 42.55 97.03 42.99 95.64 42.99H86L85.99 42.98ZM145.67 36.73C144.98 36.73 144.61 37.06 144.56 37.72H144.55H140.84C140.88 36.4 141.35 35.26 142.25 34.32C143.19 33.33 144.33 32.84 145.66 32.84H156.19C156.19 33.92 155.69 34.83 154.69 35.59C153.69 36.35 152.49 36.73 151.08 36.73H145.67ZM142.26 41.51C141.48 40.69 141.02 39.73 140.89 38.62H144.7C144.87 38.94 145.19 39.1 145.67 39.1H151.12C152.52 39.1 153.73 39.48 154.73 40.24C155.73 41 156.23 41.91 156.23 42.99H145.67C144.34 42.99 143.2 42.49 142.26 41.51ZM142.34 30.98C141.35 30.23 140.85 29.32 140.85 28.26H140.86H151.15C152.55 28.26 153.75 28.64 154.74 29.39C155.73 30.14 156.23 31.05 156.23 32.11H145.94C144.53 32.11 143.33 31.73 142.34 30.98ZM71.97 18.12V20.04L71.98 20.03H73.88V20.9C73.51 21.12 73.18 21.28 72.89 21.37C72.6 21.46 72.3 21.51 71.98 21.51C71.31 21.51 70.79 21.3 70.41 20.87C70.04 20.44 69.85 19.73 69.85 18.73C69.85 17.79 70.04 17.1 70.41 16.67C70.78 16.24 71.28 16.02 71.9 16.02C72.32 16.02 72.66 16.12 72.93 16.3C73.21 16.49 73.4 16.75 73.51 17.1L76.26 16.61C76.09 16.02 75.84 15.53 75.51 15.14C75.17 14.75 74.76 14.46 74.25 14.28C73.74 14.09 73.02 14 71.96 14C70.9 14 70.06 14.15 69.44 14.45C68.64 14.83 68.03 15.4 67.62 16.14C67.21 16.88 67 17.75 67 18.76C67 19.72 67.19 20.56 67.57 21.3C67.95 22.04 68.48 22.6 69.17 22.97C69.85 23.34 70.75 23.53 71.84 23.53C72.72 23.53 73.49 23.43 74.14 23.22C74.78 23.01 75.53 22.62 76.37 22.05V18.12H71.97ZM87.89 23.38V14.16H92.64C93.52 14.16 94.19 14.24 94.66 14.39C95.13 14.54 95.5 14.82 95.79 15.23C96.07 15.64 96.22 16.14 96.22 16.72C96.22 17.23 96.11 17.67 95.89 18.04C95.67 18.41 95.37 18.71 94.99 18.94C94.75 19.09 94.41 19.21 93.99 19.3C94.33 19.41 94.58 19.53 94.73 19.64C94.83 19.72 94.99 19.88 95.19 20.12C95.39 20.37 95.52 20.56 95.59 20.69L96.97 23.36H93.75L92.23 20.54C92.04 20.18 91.87 19.94 91.71 19.83C91.5 19.69 91.27 19.62 91.01 19.62H90.76V23.36H87.9L87.89 23.38ZM90.75 17.9H91.95C92.08 17.9 92.33 17.86 92.7 17.77C92.89 17.73 93.04 17.64 93.16 17.48C93.28 17.33 93.34 17.15 93.34 16.95C93.34 16.65 93.25 16.42 93.06 16.26C92.87 16.1 92.52 16.02 92 16.02H90.75V17.89V17.9ZM116.27 14.17H113.43V14.18V19.8C113.43 20.31 113.29 20.7 113.01 20.98C112.73 21.26 112.35 21.4 111.86 21.4C111.37 21.4 110.98 21.26 110.7 20.98C110.42 20.7 110.28 20.3 110.28 19.8V14.18H107.44V19.67C107.44 20.12 107.52 20.64 107.7 21.23C107.81 21.59 108.01 21.95 108.31 22.29C108.61 22.63 108.93 22.89 109.29 23.08C109.65 23.26 110.09 23.39 110.62 23.45C111.15 23.51 111.64 23.54 112.09 23.54C112.86 23.54 113.53 23.44 114.08 23.23C114.48 23.09 114.86 22.83 115.22 22.47C115.58 22.11 115.85 21.68 116.02 21.2C116.19 20.72 116.27 20.2 116.27 19.66V14.17ZM127.92 14.17H132.65C133.68 14.17 134.45 14.42 134.97 14.91C135.48 15.4 135.74 16.1 135.74 17C135.74 17.9 135.46 18.66 134.9 19.18C134.34 19.7 133.49 19.97 132.34 19.97H130.78V23.39H127.92V14.17ZM130.78 18.1H131.48C132.03 18.1 132.41 18 132.64 17.81C132.86 17.62 132.97 17.38 132.97 17.08C132.97 16.78 132.87 16.55 132.68 16.34C132.49 16.14 132.12 16.04 131.59 16.04H130.78V18.1ZM147.92 15.27C147.08 16.1 146.66 17.28 146.66 18.78L146.67 18.79C146.67 19.87 146.88 20.76 147.3 21.48C147.73 22.2 148.28 22.72 148.96 23.05C149.64 23.38 150.52 23.55 151.54 23.55C152.56 23.55 153.41 23.35 154.1 22.97C154.78 22.59 155.31 22.05 155.67 21.36C156.03 20.67 156.21 19.79 156.21 18.71C156.21 17.23 155.8 16.08 154.97 15.25C154.14 14.42 152.91 14.01 151.42 14.01C149.93 14.01 148.76 14.43 147.92 15.27ZM150.03 20.8C149.68 20.39 149.51 19.72 149.51 18.79L149.52 18.8C149.52 17.86 149.69 17.19 150.04 16.78C150.38 16.37 150.82 16.17 151.42 16.17C152.02 16.17 152.49 16.37 152.84 16.77C153.18 17.17 153.36 17.8 153.36 18.67C153.36 19.7 153.2 20.41 152.86 20.81C152.53 21.21 152.03 21.41 151.44 21.41C150.85 21.41 150.38 21.21 150.03 20.8Z" fill="#ffffff"/>
                </svg>
                </Link>
            </NextLink>

        <Box flex={ 1 }/>

        <Typography color='#fff' sx={{marginTop:{xs:'1rem', md:'0'}}}>© 2022 GRUPO SDRAZ. Todos los derechos reservados.</Typography>

        </Toolbar>
  )
}
