import PropTypes from 'prop-types';

const User = ({ id }) => `<@${id}>`;

User.propTypes = {
  id: PropTypes.string.isRequired
};

export default User;
