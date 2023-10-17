import React from 'react';
import PropTypes from "prop-types"
const PrivetRoute = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};
PrivetRoute.propTypes = {
    children: PropTypes.node
}
export default PrivetRoute;