import { Box, Button, TextField,Typography,styled } from "@mui/material";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {logPatient} from "../service/api";




const Component = styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow: 5px 5px 5px 5px rgb(0 0 0/0.6);
    padding: 70px;
    margin-top: 60px;
`

const Heading = styled(Box)`
    margin-left: 80px;
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin: 20px;;
    }
`

const LoginButton = styled(Button)`
    background: #FB641B;
`
/*const SignupButton = styled(Button)`
    color: #2874f0;'
    background: #fff;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`*/

const Text = styled(Typography)`
    color : #878787;
    font-size: 12px;
`

const PatientLogin = () => {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loggedInUser,setLoggedInUser] = useState(null);
    const [error,setError] = useState();
    
    const nav = useNavigate();

    const handleLogin = async ()=> {
        try {
            const response = await logPatient({username,password});
            if(response.status === 200){
                setLoggedInUser(response.data);
                nav('/pDashboard');
            }else{
                setError("Invalid Username and Password");
            }
            
        } catch (error) {

            setError("An error occured",error);
            
        }
    }

    return(
        <div className="main">
            <NavBar/>
        <Component>
            <Heading>
                <h2>Patient Login</h2>
            </Heading>
        
            <Wrapper>
            <TextField 
                variant="standard"
                label="Enter username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                  />
            <TextField 
                variant="standard"
                label="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                 />
            <LoginButton variant="contained" onClick={handleLogin}>Login</LoginButton>
            <Text style={{textAlign : 'center'}}>Not a member ? </Text>
            <Button onClick={()=> {nav('/signup')}}>Create an Account</Button>

           
            
            </Wrapper>
        
        </Component>
        </div>
    )
}


export default PatientLogin;