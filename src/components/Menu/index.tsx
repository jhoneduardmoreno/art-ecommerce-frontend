import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon, Badge, useMediaQuery } from '@mui/material';
import styles from './Menu.module.scss';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Menu = () => {

  const isDesktop = useMediaQuery('(min-width:1024px)');

  const [openMenu, setOpenMenu] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const textItemsStyles = {
    fontSize: '1.4rem',
    fontFamily: '"Poppins", sans-serif;',
    color: '#000',
  };

  const iconItemsStyles = {
    fontSize: '1.8rem',
  }

  const menuItemStyles = {
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  };

  const MenuItems = [
    {
      id: 1,
      icon: <HomeOutlinedIcon sx={iconItemsStyles} />,
      name: 'Inicio',
      path: '/',
    },
    {
      id: 2,
      icon: <ShoppingCartOutlinedIcon sx={iconItemsStyles}  />,
      name: 'Productos',
      path: '/',
      subItems: [
        { id: 1, name: 'Estuches', path: '/' },
        { id: 2, name: 'Retratos', path: '/' },
        { id: 3, name: 'Accesorios para el hogar', path: '/' },
      ],
    },
  ];

  

  return (
    <div className={styles.container}>

      { 
        isDesktop 
        ? 
        <div className={styles.menuDesktop}>
          {MenuItems.map((item) => ( 
            <Link to={item.path} key={item.id} className={styles.textMenuDesktop}>
              {item.name}
            </Link>
          ))}
        </div>
        :
        <IconButton onClick={handleOpenMenu}>
          <MenuIcon sx={{ fontSize: '3rem', color: '#000' }} />
        </IconButton>
      }
      <div className={isDesktop ? `${styles.logo} ${styles.logoDesktop}`: styles.logo} >ARTECONMARA</div>
      <IconButton onClick={() => console.log('Opening cart')}>
        <Badge 
          badgeContent={cartItemCount} 
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#7D3586',
              color: '#fff',
            },
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: '2.3rem', color: '#000' }} />
        </Badge>
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
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={menuItemStyles}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Typography sx={textItemsStyles}>{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding: '0'}}>
                    <List>
                      {item.subItems.map((subItem) => (
                        <ListItem 
                          key={subItem.id} 
                          component={Link} 
                          to={subItem.path}
                          sx={menuItemStyles} 
                        >
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
                <ListItem 
                  component={Link} 
                  to={item.path}
                  sx={menuItemStyles} 
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
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