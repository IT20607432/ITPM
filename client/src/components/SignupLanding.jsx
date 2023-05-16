import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button,styled,IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';

const Div = styled('div')`
    

`
const Btn = styled(Button)`
    width:60%;
    margin-left:250px;
    margin-top:80px;
    
    

`


const SignUpLanding = () => {

    const nav = useNavigate();
    return (
        
        <div className='main'>
          <NavBar/>
        <IconButton aria-label="back" onClick={()=>{nav('/')}}>
        <ArrowBackIcon  />
      </IconButton>
        <Div className="btnclass">
        <Btn variant="outlined" size="large" onClick={()=>{nav('/signup')}}>
        Sign Up As a Patient
      </Btn>

      <Btn variant="outlined" size="large" onClick={()=> {nav('/DSignup')}}>
        Sign Up As a Doctor
      </Btn>

      <Btn variant="outlined" size="large">
        Admin
      </Btn>
      </Div>
      </div>

       

    )
}


export default SignUpLanding;