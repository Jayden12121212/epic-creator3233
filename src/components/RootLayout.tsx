import React from "react";
import BrutalType from "@/font";
import { useRouter } from "next/router";
import { Header } from "@/components";
import classNames from "classnames";

import styles from "./RootLayout.module.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const router = useRouter();
  const appClasses = classNames(styles.app, BrutalType.className, "global");
  const pageClasses = classNames(styles.page);
  const shouldRenderContent =
    router.pathname !== "/overview" &&
    router.pathname !== "/" &&
    router.pathname !== "/signup" &&
    router.pathname !== "/reactivate" &&
    router.pathname !== "/new-terms";

  return (
    <div className={appClasses}>
      <div className={styles.container}>
        {shouldRenderContent && <Header />}
        <section className={shouldRenderContent ? pageClasses : ""}>
          {children}
        </section>
      </div>
    </div>
  );
};

export default RootLayout;
