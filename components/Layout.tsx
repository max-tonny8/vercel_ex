import { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
    <div className={styles.backgroundRadialGradient} />
  </>
);

export default Layout;
