import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const Menu = () => {
  return (
    <div>
        <IconButton onClick={() => console.log('Opening menu')}>
            <MenuIcon sx={{fontSize: '3rem', color: '#000'}} />
        </IconButton>
    </div>
  )
}
