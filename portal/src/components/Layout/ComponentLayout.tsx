import React, { ReactNode } from "react";
import Layout from "./Layout";
import { ReactIcon, SassIcon } from "../icons";
import { CodeLink } from "./CodeLink";
import "./Layout.scss";
import { Micro } from "@fremtind/jkl-typography-react";

interface Props {
    children: ReactNode;
    pageContext: {
        frontmatter: {
            title: string;
            react?: string;
            scss?: string;
        };
    };
}

export const ComponentLayout = ({
    children,
    pageContext: {
        frontmatter: { title, react, scss },
    },
}: Props) => (
    <Layout title={title} isComponentPage>
        <>
            <header className="portal-content__heading">
                <h1 className="jkl-title-large portal-content__title">{title}</h1>
                {(react || scss) && (
                    <aside className="portal-content__packages">
                        {react && <CodeLink alt="React package" icon={<ReactIcon />} link={`${react}`} />}
                        {scss && <CodeLink alt="Style package" icon={<SassIcon />} link={scss} />}
                        <Micro className="portal-content__packages__description">Se på GitHub</Micro>
                    </aside>
                )}
            </header>
            <section className="portal-content__main">{children}</section>
        </>
    </Layout>
);

export default ComponentLayout;
