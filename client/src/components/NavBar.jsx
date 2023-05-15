import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import {Button,Stack} from "@mui/material";


const Header = styled(AppBar)`
   background: #111111;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 70px;
    text-decoration: none;
    color: inherit;
`


const NavBar = () => {

    const nav = useNavigate();
    return (
        <Header position="static">
            <Toolbar>
                
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/contact'>ContactUs</Tabs>
                <Tabs to='/about'>AboutUs</Tabs>
                <Tabs to='/donate'>Donate</Tabs>
                <Stack spacing={2} direction='row'>
                <Button  variant="outlined" onClick={()=>{
                    nav('/SLanding');
                }}>Sign Up</Button>
                <Button  variant="outlined" onClick={()=> {
                    nav('/login');

                }}>Sign In</Button>
                </Stack>
            </Toolbar>
        </Header>
    )
}

export default NavBar;