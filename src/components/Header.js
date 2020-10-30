import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/cart-plus-solid.svg'
import './css/Header.css'
import{Link} from 'react-router-dom'

class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
  
  render() {
    const {toggle} = this.state;
    return (
      <header>
              <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
              </div>
              <div className="logo">
                  <h1><Link to="/">Nike</Link></h1>
              </div>
              <nav>
                  <ul className={toggle ? "toggle" : ""}>
                      <li><Link>Home</Link></li>
                      <li><Link>Product</Link></li>
                      <li><Link>Contact</Link></li>
                      <li><Link>About</Link></li>
                      <li><Link>Login/Register</Link></li>
                      <li className="close" onClick={this.menuToggle}><img src={Close} alt="" width="20"/></li>
                  </ul>
                  <div className="nav-cart">
                      <span>0</span>
                      <Link to="/cart">
                      <img src={CartIcon} alt="" width="20" />
                      </Link>
                  </div>
              </nav>
      </header>
    );
  }
}

export default Header;
