import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Drawer, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, ListItemIcon, Badge, useMediaQuery, Button } from '@mui/material';
import styles from './Menu.module.scss';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import bagSad from '../../assets/bag-sad.png';
import estuche from '../../assets/car1.jpg';
import portavasos from '../../assets/car2.jpg';
import retrato from '../../assets/car3.jpg';


export const Menu = () => {

  const isDesktop = useMediaQuery('(min-width:1024px)');
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

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

  const titleShoppingCartStyles = {
    fontSize: '1.4rem',
    fontFamily: '"Poppins", sans-serif;',
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 'bold',
  }

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

  const itemsCart = [
    {
      id: 1,
      name: 'Estuche celular personalizado',
      image: estuche,
      price: 99.00,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Portavasos personalizado',
      image: portavasos,
      price: 150.000,
      quantity: 1,
    },
    {
      id: 3,
      name: 'retrato mascota',
      image: retrato,
      price: 45.000,
      quantity: 1,
    }
  ];

  const handleGoToStore = () => {
    navigate('/'); 
    setOpenShoppingCart(false); 
  };

  

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
      <IconButton onClick={() => setOpenShoppingCart(true)}>
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

      <Drawer anchor="right" open={openShoppingCart} onClose={() => setOpenShoppingCart(false)}>
        <Box sx={{ width: 250, padding: '1rem' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpenShoppingCart(false)}>
              <CloseIcon sx={{ fontSize: '2rem', color: '#000' }} />
            </IconButton>
          </Box>
          <Typography sx={titleShoppingCartStyles}>Carrito de compras</Typography>
          {
            cartItemCount === 0 
            ? 
            <div className={styles.contentEmptyCar}>
              <img src={bagSad} alt="Carrito vacío" className={styles.imageEmptyCar} />
              <Typography sx={textItemsStyles} style={{textAlign: 'center'}}>Tu carrito está vacío</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  marginTop: '2rem',
                  width: '60%',
                  alignSelf: 'center',
                  fontSize: '1.1rem',
                }}
                onClick={handleGoToStore}
              >
                Ir a la tienda
              </Button>
            </div>
            :
            <div>
              Productos
            </div>
          }
        </Box>
      </Drawer>
    </div>
  );
};