import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Articulos from './pages/Articulos.js'
import Home from './pages/Home.js'
import Categorias from './pages/Categorias.js'
import Blogs from './pages/Blogs.js'

function App() {
  return (
      <BrowserRouter>        
        <NavBar />
        <Switch>
          <Route path="/" component={Home} >
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
        </Switch>
      </BrowserRouter>
  );
}

export default App;
