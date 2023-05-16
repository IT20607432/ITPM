import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";


const Header = styled(List)`
    background : #111111;
    height: 100%;
`
const Links = styled(ListItem)`
    color : #FFFFFF;
`
const LinksItem = styled(ListItemIcon)`
    color: #FFFFFF;
`

const Sidebar = () => {
  return (
    <div>
        
    <Drawer variant="permanent">
      <Toolbar />
      <Header>
        <Links button component={Link} to="/Profile">
          <LinksItem>
            <PersonIcon />
          </LinksItem>
          <ListItemText primary="Profile" />
        </Links>
        <Links button component={Link} to="/doctors">
          <LinksItem>
            <PersonIcon />
          </LinksItem>
          <ListItemText primary="Doctors" />
        </Links>
        <Links button component={Link} to="/charity">
          <LinksItem>
            <HomeIcon />
          </LinksItem>
          <ListItemText primary="Charity" />
        </Links>
        {/* Add more menu items as needed */}
      </Header>
    </Drawer>
    </div>
  );
};

export default Sidebar;
