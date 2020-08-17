import React from 'react';

import { useStateValue } from './StateProvider';

import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTimeRounded';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutlineRounded';

function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <Avatar 
                 className='header__avatar' 
                 alt={user?.displayName}
                 src={user?.photoURL}
                />
                <AccessTimeIcon />

            </div>

            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search channel' />
            </div>

            <div className='header__right'>
                <HelpOutlineIcon />

            </div>
            
        </div>
    )
}

export default Header
