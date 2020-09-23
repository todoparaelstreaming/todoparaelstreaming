import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Articulos from './pages/Articulos'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Blogs from './pages/Blogs'

function App() {
  return (
      <BrowserRouter>        
        <NavBar />
          <div className="app-container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categorias">
              <Categorias />
            </Route>
            <Route exact path="/articulos">
              <Articulos />
            </Route>
            <Route exact path="/blogs-y-tutoriales">
              <Blogs />
            </Route>            
          </div>
      </BrowserRouter>
  );
}

export default App;
