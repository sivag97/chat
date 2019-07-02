import React from 'react';
import './CreateNewRoom.css';

class CreateNewRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleInviteUser = (evt) => {
    evt.preventDefault();
    this.props.createChannel(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div className="new-room-form">
        <form>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Create new Room"
            required
          />
          <button
            id="create-room-btn"
            type="submit"
            onClick={this.handleInviteUser}
          >
            +
          </button>
        </form>
      </div>
    );
  }
}

export default CreateNewRoom;
