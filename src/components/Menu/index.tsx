import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import styles from './Menu.module.scss';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

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
      icon: <HomeIcon />,
      name: 'Inicio',
      path: '/',
    },
    {
      id: 2,
      icon: <ShoppingCartIcon />,
      name: 'Productos',
      path: '/',
      subItems: [
        { id: 1, name: 'Estuches', path: '/' },
        { id: 2, name: 'Retratos', path: '/' },
        { id: 3, name: 'Accesorios para el hogar', path: '/' },
      ],
    },
  ];

  const textItemsStyles = {
    fontSize: '1.4rem',
    fontFamily: '"Poppins", sans-serif;',
    color: '#000',
  };

  const iconItemsStyles = {
    fontSize: '1.4rem',
  }

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
              <CloseIcon sx={{ fontSize: '2rem', color: '#000' }} />
            </IconButton>
          </Box>

          {MenuItems.map((item) => (
            <div key={item.id}>
              {item.subItems ? (
                <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <ListItemIcon sx={iconItemsStyles}>{item.icon}</ListItemIcon>
                    <Typography sx={textItemsStyles}>{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.id} component={Link} to={subItem.path}  >
                          <ListItemText
                            primary={
                              <Typography sx={textItemsStyles}>
                                {subItem.name}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <ListItem component={Link} to={item.path}>
                  <ListItemIcon sx={iconItemsStyles}>{item.icon}</ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography sx={textItemsStyles}>
                        {item.name}
                      </Typography>
                    } 
                  />
                </ListItem>
              )}
            </div>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};