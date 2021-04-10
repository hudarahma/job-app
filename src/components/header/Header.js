import React, { useContext, useState } from "react";
import './Header.css';
import sunIcon from '../../assets/desktop/icon-sun.svg';
import moonIcon from '../../assets/desktop/icon-moon.svg';
import searchIcon from '../../assets/desktop/icon-search.svg';
import locationIcon from '../../assets/desktop/icon-location.svg';
import logo from '../../assets/desktop/logo.svg';
import Toggle from '../toggle/Toggle';
import Button from '../button/Button';
import { MyContext } from "../../Context";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    const { setDescription, setLocation, setFullTime, fetchJobs } = useContext(MyContext);
  
    return (
        <div className='header__container'>
            
            <div className='header__title'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='header__toggle'>
                <div className='light_icon'>
                    <img src={sunIcon} alt='icon'/>
                </div>
                <Toggle  toggle={(ev) => console.log(ev)} />
                <div className='moon_icon'>
                    <img src={moonIcon}  alt='icon'/>
                </div>
            </div>

            <div className='search__container'>
                <div className='search__by__title'>
                    <img src={searchIcon}  alt='icon'/>
                    <input 
                        onKeyDown={(ev) => setDescription(ev.target.value)}
                        placeholder='Filter by title, companies, expertise…' 
                    />
                </div>
                <hr />
                <div className='search__by__location'>
                    <img src={locationIcon}  alt='icon'/>
                    <input 
                         onKeyDown={(ev) => setLocation(ev.target.value)}
                        placeholder='Filter by location…'
                     />
                </div>
                <hr />
                <div className='search__by__fulltime'>
                    <input 
                     type='checkbox'
                     onClick={(ev) => {
                        setFullTime(!toggle);
                        setToggle(!toggle);
                        }}
                    />
                    <span>Full Time Only</span>
                </div>
            
                <Button   onClick={() => fetchJobs()}>Search</Button>
                
            </div>
        </div>
    )
}

export default Header
