import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Locale from "./Locale";
import classNames from "classnames";

import styles from "./Header.module.scss";

interface HeaderProps {
  hasBorder?: boolean;
}

const Header = ({ hasBorder = true }: HeaderProps) => {
  const headerClasses = classNames(styles.header, {
    [styles.border]: hasBorder,
  });

  // Replace Temporary Code
  const isLoggedIn = true;

  return (
    <header className={headerClasses}>
      <Logo />
      <MenuLinks />

      <div className={styles.user}>
        {isLoggedIn && <span>SACDevJJ</span>}
        {isLoggedIn ? <a>Log out</a> : <a>Sign in</a>}
      </div>

      <Locale />
    </header>
  );
};

export default Header;
