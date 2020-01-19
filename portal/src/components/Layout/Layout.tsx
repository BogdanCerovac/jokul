import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@fremtind/jkl-typography-react";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";

import { Footer, Header, Menu } from "..";
import "./Layout.scss";

const getTheme = () => {
    if (typeof window !== `undefined`) {
        return window.localStorage.getItem("portal-theme") || "light";
    }
    return "light";
};

interface ContextProps {
    theme: string;
    toggleTheme: (checked: boolean) => void;
}

export const ThemeContext = React.createContext<ContextProps>({ theme: "light", toggleTheme: () => "" });

interface Props {
    children: ReactNode;
    title?: string;
    header?: string;
    isComponentPage?: boolean;
    showFooter?: boolean;
}

/* eslint-disable */
const h1 = (props: any) => <h1 className="jkl-title-large portal-doc-title" {...props} />;
const h2 = (props: any) => <h2 className="jkl-heading-large portal-doc-heading" name={props.children} {...props} />;
const h3 = (props: any) => <h3 className="jkl-heading-medium portal-doc-heading" name={props.children} {...props} />;
const h4 = (props: any) => <h4 className="jkl-heading-medium portal-doc-heading" name={props.children} {...props} />;
const h5 = (props: any) => <h5 className="jkl-micro" {...props} />;
const p = (props: any) => <p className="jkl-body portal-paragraph" {...props} />;
const ul = (props: any) => <UnorderedList {...props} />;
const li = (props: any) => <ListItem {...props} />;
const ol = (props: any) => <OrderedList {...props} />;
const a = (props: any) => <Link {...props} />;
/* eslint-enable */

const components = {
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    li,
    ol,
    a,
};

export const Layout = ({ children, title, header, isComponentPage = false, showFooter = true }: Props) => {
    const [theme, toggleDarkMode] = React.useState(getTheme());

    const toggleTheme = (showDark: boolean) => {
        if (showDark) {
            return toggleDarkMode("dark");
        }
        return toggleDarkMode("light");
    };

    React.useEffect(() => {
        if (theme === "dark") {
            window.localStorage.setItem("portal-theme", "dark");
            document.body.classList.add("portal-dark");
        } else {
            window.localStorage.setItem("portal-theme", "light");
            document.body.classList.remove("portal-dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header siteHeader={header} siteTitle={title} />
            <Menu />
            <main className={`portal-content ${isComponentPage ? "portal-content--component-page" : ""}`}>
                <MDXProvider components={components}>{children}</MDXProvider>
            </main>
            {showFooter && <Footer />}
        </ThemeContext.Provider>
    );
};

export default Layout;
