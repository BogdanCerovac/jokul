import React from "react";
import { IconFactory } from "../IconFactory";
import { IconProps } from "./types";

export const Success: React.FC<IconProps> = ({ className, variant }) => (
    <IconFactory
        viewBox="0 0 24 24"
        title="Success-icon"
        description="Sirkel med hake i midten"
        className={className}
        variant={variant}
        innerSvg={
            <>
                <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                <path d="M7 13.5L10 16.5L19.5 7" stroke="currentColor" />
            </>
        }
    />
);
