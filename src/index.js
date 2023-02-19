import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Slider from './pages/Slider';
import Collage from './pages/Collage'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/slider' element={<Slider/>} />
      <Route path='/collage' element={<Collage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);