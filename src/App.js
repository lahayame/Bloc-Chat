import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

var firebaseConfig = {
    apiKey: "AIzaSyDdcdFqqktndRHqFABd7N92T7ggd4jkAr4",
    authDomain: "amelia-s-chat-room.firebaseapp.com",
    databaseURL: "https://amelia-s-chat-room.firebaseio.com",
    projectId: "amelia-s-chat-room",
    storageBucket: "amelia-s-chat-room.appspot.com",
    messagingSenderId: "934227550242",
    appId: "1:934227550242:web:c771c216c88e93f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      activeRoom: {},
    };
  }

  setActiveRoom(room) {
    this.setState({activeRoom: room});
  }

  render() {
    return (
      <div className="App">
        <aside id="sidebar">
        <h1 className="App-title">Bloc Chat</h1>
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setActiveRoom={this.setActiveRoom.bind(this)}/>
        </aside>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom} />

      </div>
    );
  }
}

export default App;
