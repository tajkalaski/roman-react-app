import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const Navigation = () => (
    <ul className={styles.wrapper}>
        <li className={styles.navItem}>
            <NavLink exact 
            to='/'
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            >Twitters</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink 
            to='/articles'
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            >Articles</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink 
            to='/notes'
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            >Notes</NavLink>
        </li>
    </ul>
)

export default Navigation;