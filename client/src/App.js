import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { CardMedia } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="title" color="inherit" >
              News
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

//The single card that shows information of a single storage place
class InfoCard extends Component {
  render() {
    // write the style for infoCard here
    const style = {
      // padding: 10,
      // maxWidth: 300,
      margin: 20,
    }
    const card = {
      display: 'flex',
      // alignItems: 'stretch',
    }
    const image = {
      height: 200,
      width: 200,
    }
    const text = {
      // display: 'flex',
      flexDirection: 'column'
    }
    const content = {
      display: 'flex',
      paddingLeft: 20,
    }
    const price = {
      paddingLeft: 5,
      alignItems: 'flex-end',
      color: 'green'
    }
    const actions = {
      paddingTop: 80,
      // paddingLeft: 80,
      justifyContent: 'flex-end',
    }

    return (
      <Card style={style}>
        <CardContent style={card}>
          <CardMedia
            style={image}
            image='http://ofirsrl.com/wp-content/uploads/2018/03/pics-of-interior-designing-best-25-house-interior-design-ideas-on-pinterest-interior-interior-decorating-magazine.jpg'
            title='room image'
          />

          <div style={text}>
            <div style={content}>
              <div>
                <Typography variant='headline'>{this.props.name}</Typography>
                <Typography variant='subheading' color='textSecondary'>{this.props.address}</Typography>
              </div>
              <Typography variant='title' style={price}>${this.props.price}</Typography>
            </div>

            <CardActions style={actions}>
              <Button variant="outlined" color="primary">
                Request
              </Button>
              <MoreInfoDialogs
                name={this.props.name}
                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
              >More Info</MoreInfoDialogs>
            </CardActions>
          </div>

        </CardContent>
      </Card>
    )
  }
}

//The list that contains all the single card
class CardList extends Component {
  state = {
    storages:
      [{
        "name": "TestOne",
        "id": 37764,
        "location": [42.3, -70.4],
        "address": "420 N Park St\nMadison, WI 53706",
        "uid": 123,
        "transportation": true,
        "time": [
          [0, 1536427815886]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestTwo",
        "id": 89743,
        "location": [42.4, -70.4],
        "address": "430 N Park St\nMadison, WI 53706",
        "uid": 234,
        "transportation": true,
        "time": [
          [0, 1536427815886]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestThree",
        "id": 21384,
        "location": [42.5, -70.4],
        "address": "440 N Park St\nMadison, WI 53706",
        "uid": 345,
        "transportation": true,
        "time": [
          [1536427815886, 1635728863984]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestFour",
        "id": 98374,
        "location": [42.6, -70.4],
        "address": "450 N Park St\nMadison, WI 53706",
        "uid": 456,
        "transportation": true,
        "time": [
          [1635728863984, 1698387467638]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestOne",
        "id": 37764,
        "location": [42.3, -70.4],
        "address": "420 N Park St\nMadison, WI 53706",
        "uid": 123,
        "transportation": true,
        "time": [
          [0, 1536427815886]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestTwo",
        "id": 89743,
        "location": [42.4, -70.4],
        "address": "430 N Park St\nMadison, WI 53706",
        "uid": 234,
        "transportation": true,
        "time": [
          [0, 1536427815886]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestThree",
        "id": 21384,
        "location": [42.5, -70.4],
        "address": "440 N Park St\nMadison, WI 53706",
        "uid": 345,
        "transportation": true,
        "time": [
          [1536427815886, 1635728863984]
        ],
        "item": ["a1", "a2", "a3"]
      }, {
        "name": "TestFour",
        "id": 98374,
        "location": [42.6, -70.4],
        "address": "450 N Park St\nMadison, WI 53706",
        "uid": 456,
        "transportation": true,
        "time": [
          [1635728863984, 1698387467638]
        ],
        "item": ["a1", "a2", "a3"]
      }]
  }
  render() {
    const listStyle = {
      maxWidth: 600,
      minWidth: 300,
      maxHeight: '100%',
      display: 'flex', 
      overflow: 'auto',

    }
    const infoCards = this.state.storages.map((storage) => (
      <GridListTile style={{ height: 'auto' }}>
        <InfoCard
          name={storage.name}
          address={storage.address}
          price={storage.uid}
        >
        </InfoCard>
      </GridListTile>
    )
    )
    return (
      <div>
        <GridList cols={1} style={listStyle}>
            {infoCards}
        </GridList>
      </div>
    );
    // return (
    //   <div style={listStyle}>
    //     {infoCards}
    //   </div>
    // )
  }
}


//Props:
//Name, Description
class MoreInfoDialogs extends Component {
  state = {
    isOpen: false,
  }
  handleClickOpen = () => {
    this.setState({ isOpen: true });
  }
  handleClose = () => {
    this.setState({ isOpen: false });
  }
  render() {
    return (
      <div>
        <Button variant='outlined' onClick={this.handleClickOpen}>More...</Button>
        <Dialog
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.name}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
        </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Request
        </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}


export default CardList;