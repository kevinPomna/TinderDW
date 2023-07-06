import logo from './logo.svg';
import './App.css';
import { Button,Input, ListItemText, MenuList ,MenuItem, List, ListItemIcon, InputAdornment} from '@mui/material';
import InicioIcon from '@mui/icons-material/Home'
import TareasIcon from '@mui/icons-material/Book'
import CorreoIcon from '@mui/icons-material/Email'
import BusquedaIcon from '@mui/icons-material/Search'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
    <MenuList>
      <MenuItem>
      <ListItemIcon><InicioIcon></InicioIcon></ListItemIcon>
  <ListItemIcon>Inicio</ListItemIcon>
      </MenuItem>
      </MenuList>

      <MenuList>
      <MenuItem>
      <ListItemIcon><TareasIcon></TareasIcon></ListItemIcon>
  <ListItemIcon>Tareas</ListItemIcon>
      </MenuItem>
      </MenuList>

      <MenuList>
      <MenuItem>
      <ListItemIcon><CorreoIcon></CorreoIcon></ListItemIcon>
  <ListItemIcon>Correo</ListItemIcon>
      </MenuItem>
      </MenuList>

      <div>
      <Input id="input-with-icon-adornment"

       startAdornment={
       <InputAdornment position="start">
        <BusquedaIcon></BusquedaIcon>
        </InputAdornment>
       }
      />

     </div>
      
    
      </header>
      
    </div>

   
  );
}

export default App;
