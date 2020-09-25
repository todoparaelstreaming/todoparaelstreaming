import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Articulos from './pages/Articulos'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Blogs from './pages/Blogs'
import Footer from './components/Footer';

function App() {
  return (
    <Router>        
      <NavBar />
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/articulos-para-streaming" component={Articulos} />
            <Route path="/blogs-y-tutoriales" component={Blogs} />
        </div>
      <Footer /> 
    </Router>    
  );
}

export default App;
