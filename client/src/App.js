
import './App.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import PDashboard from './components/PatientDashboard';
import PatientLogin from './components/PatientLogin';
import SignUpForm from './components/SignUpForm';
import SignUpLanding from './components/SignupLanding';
import Donate from './components/donate';

import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Profile from './components/patientProfile';
import Charity from './components/Charity';
import DoctorSign from './components/DoctorSignup';
import DLogin from './components/DoctorLoging';
import DDashboard from './components/DoctorDashboard';

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>
    
      
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<AboutUs/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/donate' element= {<Donate/>}/>
      <Route path='/login' element={<PatientLogin/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/SLanding' element={<SignUpLanding/>}/>
      <Route path='/pDashboard' element={<PDashboard/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/charity' element={<Charity/>}/>
      <Route path='/DSignup' element={<DoctorSign/>}/>
      <Route path='/Dlogin' element={<DLogin/>}/>
      <Route path='/dDashboard' element={<DDashboard/>}/>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
