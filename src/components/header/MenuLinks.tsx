import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Icon } from "@/components";
import { useValidRoutes } from "@/routes/useValidRoutes";

import styles from "./MenuLinks.module.scss";

const MenuLinks = () => {
  const router = useRouter();
  const { routes } = useValidRoutes();
  const [toggled, toggleMenu] = useState(false);

  const menuClasses = classNames(styles.container, {
    [styles.menuActive]: toggled,
  });

  return (
    <div className={menuClasses}>
      <div className={styles.menuControl}>
        <button onClick={() => toggleMenu(!toggled)}>
          <Icon icon="CHEVRON_DOWN" size="xSmall" />
        </button>
      </div>

      <div className={styles.menuLinks}>
        {routes.map((route) => (
          <Link
            className={classNames({
              [styles.active]: route.path === router.pathname,
            })}
            key={route.label}
            href={route.path}
          >
            <span>{route.label}</span>
            {route.icon && (
              <Icon
                icon={route.icon}
                size="xxSmall"
                wrapperClassname={styles.icon}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuLinks;
