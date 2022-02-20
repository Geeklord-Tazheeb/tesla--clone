import React from 'react'
import './Header.css'
import logo from '../assets/teslaLogoSmall.svg'


const Header = () => {
  return (
    <div className= 'header'>
        <div className="header__logo">
            <img src={logo} alt=" tesla logo" />
        </div>
        <div className="header__center">
            <p>Model S</p>
            <p>Model 3</p>
            <p>Model Y</p>
            <p>Model Z</p>
            <p>Solar Roof</p>
            <p>Solar Panels</p>
        </div>
        <div className="header__rignt">
            <p>Shop</p>
            <p>Acoount</p>
            {/* <p>Menu</p> */}
        </div>

    </div>
  


  )
}

export default Header