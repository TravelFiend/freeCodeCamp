import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {

  return (
    <header className={styles.header}>
      <Link to='/'>
        <div>FCC Projects</div>
      </Link>

      <nav>
        <Link to='/quotes'>Random Quotes</Link>
        <Link to='/beats'>Drum Machine</Link>
        <Link to='/mkdn'>Markdown Previewer</Link>
        <Link to='/calc'>Calculator</Link>
        <Link to='/clock'>Pomodoro</Link>
      </nav>
    </header>
  );
};

export default Header;
