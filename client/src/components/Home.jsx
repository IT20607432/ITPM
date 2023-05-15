import '../styling/home.css'
import videoBg from '../images/pexels-mart-production-7089598-3840x2160-25fps.mp4';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';








const Home = () => {

    const navigate = useNavigate();
    
    

    return(
        
        <div className='main'>
            <NavBar/>
            <video src={videoBg} autoPlay loop/>
            <div className='content'>
            <h1>Best Maternity Care Services</h1>
            </div>
            <div className='subheading'>
                <p>Technology is being used in the field of maternal health to provide prenatal care,</p>
                
                <p>connecting expectant mothers to medical professionals when they are unable to access medical facilities.</p>
                <div className='btn1'>
                <button onClick={()=>{
                    navigate('/SLanding');
                }} >Join With Us</button>
            </div>

            </div>
            
        </div>
    )
}

export default Home;