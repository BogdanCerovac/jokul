import React, { FocusEvent, useState, ChangeEvent } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-select/select.min.css";

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "huawei", label: "Huawei" },
        { value: "LG", label: "LG" },
    ];
    const [value, setValue] = useState<string>();
    const universalSetValue = (input: string | ChangeEvent<HTMLSelectElement> | undefined) => {
        if (typeof input === "string") {
            setValue(input);
        } else if (input) {
            setValue(input.target.value);
        }
    };

    const onFocus = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Focus: ", input);
    };
    const onBlur = (input: string | FocusEvent<HTMLSelectElement> | undefined) => {
        console.log("Blur: ", input);
    };

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpsom beskjed" : undefined;
    const variant = choiceValues && (choiceValues["Etikettvariant"] as LabelVariant);

    return (
        <C
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            label="Hvilket merke er telefonen?"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={universalSetValue}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default Example;
