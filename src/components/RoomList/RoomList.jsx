import React from 'react';
import './RoomList.css';

class RoomList extends React.Component {
  render() {
    return (
      <div className="rooms-list">
        <div className="help-text">
          {this.props.channels.map((channel) => (
            <div key={channel}>{channel}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default RoomList;
