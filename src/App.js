import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// importamos los componentes que rodean la aplicacion
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// importamos las paginas que vamos a renderizar
import Articulos from './pages/Articulos'
import Home from './pages/Home'
import GuiaCompleta from './pages/GuiaCompleta'
import Blogs from './pages/Blogs'

function App() {
  return (
    <Router>        
      <NavBar />
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route path="/guia-completa-para-hacer-streaming-gamer-2020" component={GuiaCompleta} />
            <Route path="/articulos-para-streaming" component={Articulos} />
            <Route path="/blogs-y-tutoriales" component={Blogs} />
        </div>
      <Footer /> 
    </Router>    
  );
}

export default App;
