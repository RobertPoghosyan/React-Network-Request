import React from 'react'
import PropТypes from 'prop-types';

import './ErrorMessage.scss';

const ErrorMessage = ({text = ""}) => {
    return (
        <span className = "app-errorMessage">
            {text}
        </span>
    )
}

ErrorMessage.propТypes = {
    text: PropТypes.string
}

export default ErrorMessage;
