import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var firebaseConfig = {
    apiKey: "AIzaSyDdcdFqqktndRHqFABd7N92T7ggd4jkAr4",
    authDomain: "amelia-s-chat-room.firebaseapp.com",
    databaseURL: "https://amelia-s-chat-room.firebaseio.com",
    projectId: "amelia-s-chat-room",
    storageBucket: "amelia-s-chat-room.appspot.com",
    messagingSenderId: "934227550242",
    appId: "1:934227550242:web:cfb87d135b564aab"
  };

  firebase.initializeApp(firebaseConfig);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Bloc Chat</h1>
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
