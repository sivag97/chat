import React from 'react';
import SendBird from 'sendbird';
import { RoomList, MessageList, SendMessage, CreateNewRoom } from './components';
import { APP_ID, API_TOKEN } from './config';

import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
    };
  }
  componentDidMount = async () => {
    this.sb = new SendBird({ appId: APP_ID });
    let currentUser = {};
    this.value = 10;
    this.sb.connect('siva', (user, error) => {
      if (error) {
        return;
      }
      currentUser = user;
    });
    const response = await axios.get(`https://api-${APP_ID}.sendbird.com/v3/users/siva/my_group_channels`, {
        headers: {
           'Api-Token': API_TOKEN
        }
    })
    this.setState({
        channels: response.data.channels.map(({name})=> name)
    })
    this.user = currentUser;
  };

  createChannel = async (name) => {
    this.sb.OpenChannel.createChannel(name, null, null, null, null, (openChannel, error)=> {
        if (error) {
            return;
        }
        this.setState({
            channels: [...this.state.channels, openChannel.name]
        })
    });
  };

  render() {
    return (
      <div className="App">
        <RoomList channels={this.state.channels} />
        <MessageList />
        <SendMessage />
        <CreateNewRoom createChannel={this.createChannel} />
      </div>
    );
  }
}

export default App;
