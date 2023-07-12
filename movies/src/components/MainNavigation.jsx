import { NavLink, Link } from 'react-router-dom';
import styles from 'components/MainNavigation.module.scss';
import logo from 'img/logo-white.png';
import LoginButton from 'components/LoginButton';
import AuthModule from 'components/AuthModule';
import { useState } from 'react';

const MainNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navLinkHandler = ({ isActive }) => {
    return isActive ? styles.active : undefined;
  };

  const handleButtonClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsClicked(false);
  };

  return (
    <>
      <section>
        <header className={styles.header}>
          <Link to="/" className={styles.header__logo}>
            <img src={logo} alt="Logo" />
          </Link>
          <nav>
            <ul className={styles.header__list}>
              <li>
                <NavLink className={navLinkHandler} to={'/'} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkHandler} to={'/about'}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkHandler} to={'/contacts'}>
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkHandler} to={'/movies'}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>

          <LoginButton isClicked={isClicked} onClick={handleButtonClick} />
        </header>
        {isClicked && <AuthModule onClose={handleLinkClick} />}
      </section>
    </>
  );
};

export default MainNavigation;
