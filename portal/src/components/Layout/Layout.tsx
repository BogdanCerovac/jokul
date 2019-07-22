/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { Menu } from "../Menu/Menu";

import "./Layout.scss";

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => (
    <>
        <Header siteTitle="Jøkul" />
        <Menu />
        <main className="portal-content">{children}</main>
    </>
);

export default Layout;
