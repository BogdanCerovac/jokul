import React from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const CheckMark: React.FC<IconProps> = ({ className, variant }) => (
    <IconFactory
        title="CheckMark"
        description="Ikon av en hake"
        className={className}
        variant={variant}
        innerSvg={<path d="M1 15.2168L5.24264 19.4594L19.3848 5.3173" stroke="currentColor" />}
    />
);
