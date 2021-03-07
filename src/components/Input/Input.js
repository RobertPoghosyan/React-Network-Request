import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
    type = "",
    value,
    onChange,
    loading = false,
    placeholder ="",
    className = ""
}) => {
    return (
        <input
            type = {type}
            value = {value}
            onChange = {onChange}
            disabled = {loading}
            placeholder = {placeholder}
            className = {`app-input ${className}`} 
        />
    )
}

Input.propTypes = {
    type:PropTypes.string,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    loading:PropTypes.bool,
    placeholder:PropTypes.string,
    className:PropTypes.string
}

export default Input;
