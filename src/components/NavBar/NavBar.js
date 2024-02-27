import React, { useContext, useState } from "react";
import menubtn from "../../img/menu.png";
import logo from "./../../img/logo.svg";
import search_icon from "../../img/search_icon.png";
import liked_icon from "../../img/liked_icon.png";
import mail_icon from "../../img/mail_icon.png";
import auth_icon from "../../img/auth_icon.png";
import common from "../../common.module.css";
import styles from "./NavBar.module.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CONTACTS_PAGE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";

const NavBar = observer(() => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <header className={styles.header}>
      <div className={common.container}>
        <div className={styles.navbar}>
          <Link to={SHOP_ROUTE} className={styles.logo}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          {/* {user.isAuth ? (
            <ul className={click ? styles.navMenuActive : styles.navMenu}>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                  to={ADMIN_ROUTE}
                >
                  MENSWEAR
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLinks}
                  onClick={logOut}
                  to={LOGIN_ROUTE}
                >
                  WOMENSWEAR
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link
                  to={CONTACTS_PAGE}
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                >
                  KIDS
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link
                  to={ABOUT_ROUTE}
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                >
                  SALE
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to={ABOUT_ROUTE}
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                >
                  DISCOVER
                </Link>
              </li>
            </ul>
          ) : ( */}

          <ul className={click ? styles.navMenuActive : styles.navMenu}>
            <li
              className={styles.navItem}
              onClick={() => {
                user.setIsAuth(true);
              }}
            >
              <Link
                to={LOGIN_ROUTE}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                MENSWEAR
              </Link>
              {/* dropdown sublist menu */}
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link
                to={ABOUT_ROUTE}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                WOMENSWEAR
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link
                to={CONTACTS_PAGE}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                KIDS
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to={CONTACTS_PAGE}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                SALE
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to={CONTACTS_PAGE}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                DISCOVER
              </Link>
            </li>
          </ul>
          {/* )} */}
          <div className={styles.search_liked_mail}>
            <div className={styles.search_box}>
              <img src={search_icon} alt="search_btn" />
              <input
                type="text"
                className={styles.search_txt}
                placeholder="Search"
              ></input>
            </div>
            <a href="3">
              <img src={liked_icon} alt="liked_icon" />
            </a>
            <a href="4">
              <img src={mail_icon} alt="mail_icon" />
            </a>
            <a href="5">
              <img src={auth_icon} alt="auth_icon" />
            </a>
          </div>

          <div className={styles.menuIcon} onClick={handleClick}>
            <img
              src={menubtn}
              alt=")"
              className={click ? styles.closeIcon : styles.menuIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
});

export default NavBar;
