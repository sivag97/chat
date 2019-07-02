import React from 'react';
import './SendMessage.css';

const SendMessage = (props) => (
  <form className="send-message-form">
    <input type="text" />
  </form>
);

SendMessage.propTypes = {
  // bla: PropTypes.string,
};

SendMessage.defaultProps = {
  // bla: 'test',
};

export default SendMessage;
