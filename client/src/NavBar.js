import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ReactDOM from 'react-dom';


  

class Navbar extends Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="title" color="inherit" >
              MadHouse
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      )
  }
}

ReactDOM.render(<Navbar></Navbar>, document.getElementById('nav'));