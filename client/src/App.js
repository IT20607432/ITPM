
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PatientLogin from './components/PatientLogin';
import Donate from './components/donate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    
      
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<AboutUs/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/donate' element= {<Donate/>}/>
      <Route path='/login' element={<PatientLogin/>}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
