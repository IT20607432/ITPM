import { Button, FormControl, FormGroup, IconButton, Input, InputLabel, Typography,styled } from "@mui/material";
import { useState } from "react";
import { regDoctor } from "../service/api";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`

const defaultValue = {
    fullname: '',
    username:'',
    email:'',
    nic:'',
    address:'',
    age:'',
    licenseNo:'',
    specilization:'',
    experience:'',
    workplace:'',
    password:'',


}

const Text = styled(Typography)`
    color : #878787;
    font-size: 14px;
    margin: auto;
`
const SignUpBUtton = styled(Button)`
    background: #FB641B;
    width: 50%;
    margin: auto;
`



const DoctorSign =() => {

    const nav = useNavigate();

    const [doctor, setDoctor] = useState(defaultValue);
    //const [error,setError] = useState(false);

    const onValueChange = (e) => {
        console.log(e.target.name,e.target.value);
        setDoctor({...doctor, [e.target.name]: e.target.value})
        console.log(doctor);
        
    }

    const registerDoctor = async() => {
        await regDoctor(doctor)
    }
    return(
        <Container>
        <IconButton aria-label="back" onClick={()=>{nav('/SLanding')}}>
    <ArrowBackIcon fontSize="large" />
  </IconButton>
        
        <Typography variant="h4">Doctor Registration Form</Typography>
        <FormControl>
            <InputLabel required>Full Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="fullname"/>
        </FormControl>

        <FormControl>
            <InputLabel required>UserName</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="username"/>
        </FormControl>

        <FormControl>
            <InputLabel required>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="email"/>
        </FormControl>

        <FormControl>
            <InputLabel>NIC</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="nic"/>
        </FormControl>

        <FormControl required>
            <InputLabel>Address</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="address"/>
        </FormControl>

        <FormControl>
            <InputLabel>Age</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="age"/>
        </FormControl>

        <FormControl>
            <InputLabel>License No</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="licenseNo"/>
        </FormControl>

        <FormControl>
            <InputLabel required>Specilization</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="specilization" />
        </FormControl>
        

        <FormControl>
            <InputLabel required>Experience</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="experience" />
        </FormControl>

        <FormControl>
            <InputLabel required>Work Place</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="workplace" />
        </FormControl>

        <FormControl>
            <InputLabel required>Password</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="password" />
        </FormControl>

        <FormControl>
            <SignUpBUtton variant="contained" onClick={()=> {
                nav('/dDashboard');
                registerDoctor()
                }}>Sign Up</SignUpBUtton>
        </FormControl>

        <Text>Already a member ? </Text>

        
        <Button onClick={()=> {nav('/Dlogin')}}>Login</Button>

    
    </Container>
    )
}


export default DoctorSign;