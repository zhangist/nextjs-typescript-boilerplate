import * as React from "react";
import Link from "next/link";
import Head from "next/head";

export interface LayoutProps {
  title?: string;
}

const Layout: React.SFC<LayoutProps> = ({
  children,
  title = "Nextjs Typescript Boilerplate"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <span>/</span>
        <Link href="/a">
          <a>a</a>
        </Link>
        <span>/</span>
        <Link href="/b">
          <a>b</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>&copy; 2019 zhangist</footer>
  </div>
);

export default Layout;
