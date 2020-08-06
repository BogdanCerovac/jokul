import React from "react";
import { useNavigationLinks, DocumentationPageInfo } from "../Header/useNavigationLinks";
import { useLocation } from "../../contexts/locationContext";
import { SidebarMenu } from "./SidebarMenu";

import "./Sidebar.scss";

export function Sidebar() {
    const {
        profileDocPages,
        getStartedDocPages,
        componentDocPages,
        blogPages,
        PageType,
        componentGroup,
    } = useNavigationLinks();

    const { currentSection } = useLocation();

    if (currentSection === "") {
        return null;
    }

    let links: DocumentationPageInfo[];
    switch (currentSection) {
        case PageType.PROFIL:
            links = profileDocPages;
            break;
        case PageType.KOMIGANG:
            links = getStartedDocPages;
            break;
        case PageType.KOMPONENTER:
            links = componentDocPages;
            break;
        case PageType.BLOG:
            links = blogPages;
            break;
        default:
            links = [];
            break;
    }

    return (
        <nav className="jkl-portal-sidebar-menu" aria-label="Sidemeny">
            <SidebarMenu
                links={links}
                currentSection={currentSection}
                groups={componentGroup}
                showGroups={currentSection === PageType.KOMPONENTER}
            />
        </nav>
    );
}
