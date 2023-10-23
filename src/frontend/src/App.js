import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import BuscaSocio from './components/pages/BuscaSocio'
import QuadroSocios from './components/pages/QuadroSocios'
import Grafo from './components/pages/Grafo'
import Home from './components/pages/Home';

export default function App(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buscasocio' element={<BuscaSocio/>}/>
        <Route path='/quadrosocios' element={<QuadroSocios/>}/>
        <Route path='/grafo' element={<Grafo/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}