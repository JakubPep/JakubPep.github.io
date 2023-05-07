import React from "react";
import { DividerLine } from "../styledComponents/divider.styled";

const SectionDivider = (props) => {
    return (
    <>
        <DividerLine 
        id={props.id}
        />
    </>
    );
};

export default SectionDivider;