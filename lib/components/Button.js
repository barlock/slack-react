import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, value, callbackId, children }) => {
    return (
        <actions>
            <type>button</type>
            <name>{name}</name>
            <value>{value ? value : name}</value>
            {callbackId ? <callback_id>{callbackId}</callback_id> : null }
            <text>{children}</text>
        </actions>
    )
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    callbackId: PropTypes.string,
};

export default Button;
