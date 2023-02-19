import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header>
            <h1 className={style.h1}>Todolist</h1>
        </header>
    )
};

export default Header;