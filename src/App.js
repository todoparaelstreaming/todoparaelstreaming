import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// importamos los componentes que rodean la aplicacion
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// importamos las paginas que vamos a renderizar
import Articulos from './pages/Categorias'
import Home from './pages/Home'
import GuiaCompleta from './pages/GuiaCompleta'
import Blogs from './pages/Blogs'
import ComoHacerStr from './components/articulos/ComoHacerStreaming2020'
import ComoHSEnAndroid from './components/articulos/ComoHSEnAndroid'

function App() {
  return (
    <Router>        
      <NavBar />
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route path="/guia-completa-para-hacer-streaming-gamer-2020" component={GuiaCompleta} />
            <Route path="/articulos-para-streaming" component={Articulos} />
            <Route path="/blogs-y-tutoriales" component={Blogs} />
            <Route path="/como-hacer-streaming-2020" component={ComoHacerStr} />
            <Route path="/como-hacer-streaming-con-streamlab-en-mobile" component={ComoHSEnAndroid} />
        </div>
      <Footer /> 
    </Router>    
  );
}

export default App;
