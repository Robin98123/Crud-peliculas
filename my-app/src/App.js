import './App.css';
import AgregarUsurio from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  return (
    <>
    <h1>Crud MERN STACK</h1>
    <ListaUsuarios/>
    <AgregarUsurio/>
    <EditarUsuario/>
    </>
  );
}

export default App;
