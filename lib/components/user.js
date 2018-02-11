import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id }) => {
    return `<@${id}>`;
};

User.propTypes = {
    id: PropTypes.string.isRequired,
};

export default User;
