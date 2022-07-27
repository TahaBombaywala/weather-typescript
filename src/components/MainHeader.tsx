import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <>
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                <NavLink to='/'>Form</NavLink>
                </li>
                {/* <li>
                <NavLink  to='/secondform' >Details</NavLink>
                </li>
                <li>
                <NavLink  to='/thirdform' >Weather</NavLink>
                </li> */}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader;
