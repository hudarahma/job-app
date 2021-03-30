import React from 'react';
import './Header.css';
import sunIcon from './assets/desktop/icon-sun.svg';
import moonIcon from './assets/desktop/icon-moon.svg';
import logo from './assets/desktop/logo.svg';

function Header() {
    return (
        <div className='header__container'>
            
                <div className='header__title'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='header__toggle'>
                    <div className='light_icon'>
                        <img src={sunIcon} alt='icon'/>
                    </div>
                    <div className='toggle'>
                        <div className='toggle__button'>
                            <span></span>
                        </div>
                    </div>
                    <div className='moon_icon'>
                        <img src={moonIcon}  alt='icon'/>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Header
