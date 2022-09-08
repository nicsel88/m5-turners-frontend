import React from 'react'

import styles from "./Header.module.css";
import logo from '../../../images/logo.png';
import phoneGlyph from '../../../images/phone-solid/32x32.png';
import mailGlyph from '../../../images/arrow-down.png'

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles['contact-banner']}>
        <img src={mailGlyph} alt='mail glyph' /><span>contact@turners.co.nz</span>
        <img src={phoneGlyph} alt='phone glyph' /><span>0800 887 637</span>
      </div>
      <nav className={styles['title-banner']}>
        <img src={logo} alt='Turners Cars logo' style={{ height: '7vh' }} />
        <div className={styles.title}>Car Insurance Quote</div>
      </nav>
    </div>

  )
}

export default Navbar