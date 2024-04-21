import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Box, Typography } from '@mui/material';
import styles from './Menu.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const MenuItems = [
    {
      id: 1,
      icon: <ShoppingCartIcon />,
      name: 'Productos',
      path: '/',
      subItems: [
        { id: 1, name: 'Estuches', path: '/' },
        { id: 1, name: 'Retratos', path: '/' },
        { id: 1, name: 'Accesorios para el hogar', path: '/' },
      ]
    },
    {
      id: 2,
      icon: <ShoppingCartIcon />,
      name: 'Proyectos',
      path: '/',
    },
  ]

  return (
    <div className={styles.container}>
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon sx={{ fontSize: '3rem', color: '#000' }} />
      </IconButton>
      <div className={styles.logo}>ARTECONMARA</div>
      <IconButton onClick={() => console.log('Opening cart')}>
        <ShoppingCartIcon sx={{ fontSize: '2.3rem', color: '#000' }} />
      </IconButton>

      <Drawer anchor="left" open={openMenu} onClose={handleCloseMenu}>
        <Box sx={{ width: 250, padding: '1rem' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleCloseMenu}>
              <CloseIcon sx={{ fontSize: '2rem', color: '#000' }}/>
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Menu
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};