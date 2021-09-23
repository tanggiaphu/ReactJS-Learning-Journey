import React from 'react';

import HeaderCartBtn from './HeaderCartBtn';
import styles from './Header.module.css'
import mealImg from '../../Asset/Images/meals.jpg'

function Header(props) {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBtn onShow={props.onShow}></HeaderCartBtn>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImg} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Header;