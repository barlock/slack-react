import React from 'react';
import PropTypes from 'prop-types';
import { Attachment } from './index';
import _ from 'lodash';

const Message = ({
  children, thread_ts, response_type, replace_original, delete_original
}) => {
  const [attachments, text] = _.partition(
    React.Children.toArray(children),
    child => child.type === Attachment
  );

  return (
    <message>
      { thread_ts ? <thread_ts>{thread_ts}</thread_ts> : null }
      { response_type ? <response_type>{response_type}</response_type> : null }
      { replace_original ? <replace_original>{replace_original}</replace_original> : null }
      { delete_original ? <delete_original>{delete_original}</delete_original> : null }

      <text>{text}</text>
      {attachments}
    </message>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  thread_ts: PropTypes.string,
  response_type: PropTypes.string,
  replace_original: PropTypes.string,
  delete_original: PropTypes.string
};

export default Message;
