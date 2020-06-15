import React, { Component } from 'react';
import './App.css';
import logo from './sern.png';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './User/User.css';

class App extends Component {
  state = {
    currentUserName: 'JohnTitor'
  }

  handleChangeUser = (event) => {
    this.setState({ currentUserName: event.target.value });
  }

  render() {
    const greenBg = {
      backgroundColor: 'lightseagreen',
      color: '#FFF'
    }

    const blueBg = {
      backgroundColor: 'lightblue'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
        </header>
        <div className="App-intro">
          <div className="userFieldContainer">
            <p>Please inform your username to proceed.</p>
            <UserInput userName={this.state.currentUserName} handleChangeUser={this.handleChangeUser} />
          </div>

          <UserOutput salute="Hello" userName={this.state.currentUserName} welcomeMessage="We welcome you to the SERN Research Institution." bg={greenBg} />
          <UserOutput salute="Hey" userName={this.state.currentUserName} welcomeMessage="Please stay in touch to receive updates about our latest experiments." bg={blueBg} />
        </div>
      </div>
    );
  }
}

export default App;
