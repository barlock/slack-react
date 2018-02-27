import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ title, short, children }) => {
  return (
    <fields>
      <title>{title}</title>
      <value>{children}</value>
      {short ? <short>true</short> : null}
    </fields>
  )
};

Field.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  short: PropTypes.bool
};

export default Field;
