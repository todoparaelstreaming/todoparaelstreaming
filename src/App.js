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

function App() {
  return (
    <Router>        
      <NavBar />
        <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/articulos" component={Articulos} />
            <Route path="/blogs-y-tutoriales" component={Blogs} />
        </div>  
    </Router>    
  );
}

export default App;
