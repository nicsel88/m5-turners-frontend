import React from 'react'

import styles from "./Navbar.module.css";
import logo from '../../../images/logo.png';
import phoneGlyph from '../../../images/phone-solid/32x32.png';
import arrowDown from '../../../images/arrow-down.png'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        Check out our new insurance quote calculator!&nbsp; <a href=''> Get started here.</a>
      </div>
      <nav className={styles.navbar}>
        <img src={logo} alt='Turners Cars logo' style={{ height: '7vh' }} />
        <div className={styles.navmenu}>
          <ul>
            <li><span>Buy</span><img src={arrowDown} style={{ height: '10px' }}/></li>
            <li><span>Sell</span><img src={arrowDown} style={{ height: '10px' }}/></li>
            <li><span>Finance</span></li>
            <li><span>Insurance</span></li>
            <li><span>About</span><img src={arrowDown} style={{ height: '10px' }}/></li>
          </ul>
        </div>
        <button id={styles['call-button']} ><img src={phoneGlyph} alt='phone glyph' style={{ height: '1rem' }} />0800 887 637</button>
      </nav>
    </div>

  )
}

export default Navbar