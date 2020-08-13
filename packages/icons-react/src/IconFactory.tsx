import React, { ReactNode } from "react";
import { variants } from "./icons/types";

interface Props {
    title: string;
    description: string;
    innerSvg: ReactNode;
    variant?: variants;
    viewBox?: string;
    className?: string;
}

export const IconFactory: React.FC<Props> = ({
    viewBox = "0 0 20 21",
    variant = "inherit",
    className = "",
    title,
    description,
    innerSvg,
}) => (
    <svg
        className={`jkl-icon jkl-icon--${variant} ${className}`}
        width="100%"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>{title}</title>
        <desc>{description}</desc>
        {innerSvg}
    </svg>
);
