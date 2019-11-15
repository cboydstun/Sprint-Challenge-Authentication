import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


  


class NavBar extends React.Component {
    render(){
        return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <Link to ='/register'>Register</Link>
                </Typography>
                <Typography>
                    <Link to ='/login'>Login</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )};
};
export default NavBar;