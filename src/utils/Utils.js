import React from "react";
import * as PropTypes from "prop-types";

export const listOptions = (list) => {
    return list.map((element, index) => (
        <option key={index}>{element.name}</option>
    ));
};

listOptions.defaultProps = {
    name: "Blank",
}

listOptions.propTypes = {
    name: PropTypes.string,
};