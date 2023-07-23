'use client'
import styles from './navbar.module.css'
import { useTheme } from 'next-themes';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import AnimatedTabs from './animatedtabs';


const Navbar = () => {

  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(0);

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      Cookies.set('theme', 'dark');
    } else {
      setTheme('light');
      Cookies.set('theme', 'light');
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`${styles.header} ${scroll > 10 ? styles.scrolled : ''}`}>
      <div>Logo</div>
      <AnimatedTabs />
      <button onClick={handleTheme}>
        Theme
      </button>
    </header>
  )
}

export default Navbar;