import './Navbar.css';
import React from 'react';
import '../../Placeholder';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <>
      <div className ="navbar">  
        <div className="logo">logo</div>
        <div className="banner">banner</div>
        <div className="info">
          <div>
            <Button> <Link to='/'>home</Link> </Button>
          </div>
          <div>
            <Button> <Link to='/aboutme'>about me</Link> </Button>
          </div>
          <div>
            <Button> <Link to='/contact'>contact</Link> </Button>
          </div>
        </div>
        <div className="cart">cart</div>
      </div>
    </>
  );
}
export default Navbar;