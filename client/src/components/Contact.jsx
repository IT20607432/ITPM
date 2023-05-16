import {  Typography,FormControl, InputLabel, FormGroup, Input, Button,styled } from "@mui/material";
import '../styling/contact.css';
import { useState } from "react";
import { addContact } from "../service/api";
import NavBar from "./NavBar";

const Container = styled(FormGroup)`
    width: 45%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 30px;
    }
    


`
const defaultValue = {
    fname : '',
    lanme: '',
    email:'',
    phone:'',
    message:'',
}



const Contact = ()=> {

    const [contact, setContact] = useState(defaultValue);

    const onValueChange =  (e) => {
        console.log(e.target.name,e.target.value);
        setContact({...contact, [e.target.name ]: e.target.value})
        console.log(contact);
    }

    const AddcontactUs = async () => {
        await addContact(contact);

    }

    return(

    <div>
            <NavBar/>
        <Container>
            
            <Typography variant="h5">Contact Us</Typography>
            <FormControl>
                <InputLabel required >First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fname"/>
            </FormControl>

            <FormControl>
                <InputLabel required>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lname"/>
            </FormControl>

            <FormControl>
                <InputLabel required>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>

            <FormControl>
                <InputLabel required>Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>

            <FormControl >
                <InputLabel required>Message</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="message"/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={() => AddcontactUs()}>Submit</Button>
            </FormControl>
        </Container>
        </div>
    
         
       
    )
}

export default Contact;