import { graphql, useStaticQuery } from "gatsby";

export interface Frontmatter {
    title: string;
    react?: string;
    scss?: string;
    order?: string;
    author?: string;
    publishDate?: string;
    group?: string;
}

interface RawDocumentationPage {
    node: {
        path: string;
        context: {
            frontmatter: Frontmatter;
        };
    };
}

export interface DocumentationPageInfo extends Frontmatter {
    path: string;
}

export function useNavigationLinks() {
    const { allSitePage } = useStaticQuery(graphql`
        query getPages {
            allSitePage(
                sort: { order: ASC, fields: context___frontmatter___title }
                filter: { context: { frontmatter: { title: { regex: "/.*/" } } } }
            ) {
                edges {
                    node {
                        path
                        context {
                            frontmatter {
                                title
                                order
                                author
                                publishDate
                                group
                            }
                        }
                    }
                }
                distinct(field: context___frontmatter___group)
            }
        }
    `);
    const pages: DocumentationPageInfo[] = allSitePage.edges.map((edge: RawDocumentationPage) => ({
        path: edge.node.path,
        ...edge.node.context.frontmatter,
    }));

    const sortByOrder = (a: DocumentationPageInfo, b: DocumentationPageInfo) => {
        if (a.order && b.order) {
            return parseInt(a.order) - parseInt(b.order);
        }
        return 0;
    };

    const getDate = (publishDate: string) => {
        const rawDate = publishDate.split(".").map((i) => parseInt(i, 10));
        const date = new Date(rawDate[0], rawDate[1], rawDate[2]);
        return date.getTime();
    };

    const sortByDate = (a: DocumentationPageInfo, b: DocumentationPageInfo) => {
        if (a.publishDate && b.publishDate) {
            return getDate(b.publishDate) - getDate(a.publishDate);
        }
        return 0;
    };

    enum PageType {
        PROFIL = "profil",
        KOMIGANG = "komigang",
        KOMPONENTER = "komponenter",
        BLOG = "blog",
    }

    const profileDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("profil"))
        .sort(sortByOrder);
    const getStartedDocPages = pages
        .filter((page: DocumentationPageInfo) => page.path.includes("komigang"))
        .sort(sortByOrder);
    const componentDocPages = pages.filter((page: DocumentationPageInfo) => page.path.includes("komponenter"));
    const componentGroup = allSitePage.distinct;

    const blogPages = pages.filter((page: DocumentationPageInfo) => page.path.includes(PageType.BLOG)).sort(sortByDate);

    return { profileDocPages, getStartedDocPages, componentDocPages, componentGroup, blogPages, PageType };
}
