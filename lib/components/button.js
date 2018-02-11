import React from 'react';
import PropTypes from 'prop-types';

const button = ({ name, value, children }) => {
    return (
        <actions>
            <type>button</type>
            <name>{name}</name>
            <value>{value ? value : name}</value>
            <text>{children}</text>
        </actions>
    )
};

button.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default button;
