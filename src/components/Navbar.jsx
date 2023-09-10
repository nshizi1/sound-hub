import React, {useState} from "react"
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../images/soundLogo.png';
import '../style/Navbar.css';
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><Link className="home" to="/">Home</Link></li>
                    <li className='nav-item'><NavLink to="shop">Shop</NavLink></li>
                    <li className='nav-item'><NavLink to="blog">Blog</NavLink></li>
                    <li className='nav-item'><NavLink to="about">About us</NavLink></li>
                    <li className='nav-item'><NavLink to="contact">Contact Us</NavLink></li>
            </ul>
            <div className="icons">
                <div className="account">
                    <NavLink to="account">
                        <i class="fa-solid fa-user"></i>
                        <p>Account</p>
                    </NavLink>
                </div>
                <div className="cart">
                    <NavLink to="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    </NavLink>
                </div>
            </div>
            <div className="hamburger" onClick= {handleClick}>
                {click ? (<FaTimes size={30} style={{color: '#187498'}}/>):(<FaBars size={30}  style={{color: '#187498'}} />)}
            </div>
        </div>
    )
}

export default Navbar;

