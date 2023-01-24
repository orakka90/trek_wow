import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './images/icon-modified.png'; // with import
import styles from '../style.css'

function Header(props) {
    const { title } = props;

    return (
        <div className='header'>
            <img className='logo' src={logo} />
        </div>

    );
}


export default Header;