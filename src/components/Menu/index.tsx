import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import styles from './Menu.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Menu = () => {
  return (
    <div>
        <IconButton onClick={() => console.log('Opening menu')}>
            <MenuIcon sx={{fontSize: '3rem', color: '#000'}} />
        </IconButton>
        <div className={styles.logo}>
            ISMARA DAYANA REINELL
        </div>
        <IconButton onClick={() => console.log('Opening cart')}>
            <ShoppingCartIcon sx={{fontSize: '3rem', color: '#000'}} />
        </IconButton>
    </div>
  )
}
