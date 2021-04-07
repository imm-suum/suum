import React, { Component } from 'react';
import Nav from '../Nav/Nav.jsx';
import Burger from '../Burger/Burger.jsx';
import './HamburgerMenu.css';
import { Backdrop } from '../Backdrop/Backdrop.jsx';

class HamburgerMenu extends Component {
  //set up initial state of HMMenu as closed
  state = {
    navOpen: false
  }

  //listen for click event on Burger
  burgerClickHandler = ()=>{
    //use function from to pass function to set state
    this.setState((prevState)=>{
        return {navOpen: !prevState.navOpen};

    })
    console.log("opened!");
  }

  backdropClickHandler = () => {
    this.setState({navOpen:false});
    console.log("closed!");
  }

  render(){
    let nav;
    let backdrop;

    // if this.state.nav is OPEN (or true)->
    if (this.state.navOpen) {
      //nav = <Nav show={this.state.navOpen} />
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="flexbox HBMenu">
        <Burger click={this.burgerClickHandler} className="burger-button"/>
        <Nav show={this.state.navOpen} />
        {/* {nav} */}
        {backdrop}
      </div>

    )

  }
}
  
export default HamburgerMenu;