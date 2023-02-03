import './App.css';
import AgregarUsurio from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Crud MERN STACK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusruario">Agregar Usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <BrowserRouter>
  <Routes>
    <Route path='/' element={<ListaUsuarios/>} exact></Route>
    <Route path='/agregarusuario' element={<AgregarUsurio/>} exact></Route>
    <Route path='/editarusuario' element={<EditarUsuario/>} exact></Route>
  </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
