import React from 'react';
import './App.css';


import Login from './components/Login/Login.js'
import ChatRoom from './containers/ChatRoom/ChatRoom.js'


class App extends React.Component{

  constructor(){
    super();
    this.state={
      nameField: '',
      userName:'',

    }
  }

  onLoginAttempt = (name) => {
    if (typeof name === typeof 's'){
      this.setState({userName: name.trim()});
      localStorage.AppsChat = name.trim();
    } else {
      this.setState({userName: this.state.nameField});
      localStorage.AppsChat = this.state.nameField;
    }
  }

  onUserNameInputChange = (e) => {
    this.setState({nameField:e.target.value})
  }
  

  render(){

    const { userName } = this.state;

    return (userName === '') 
    ? <Login onLoginAttempt={this.onLoginAttempt} onUserNameInputChange={this.onUserNameInputChange} />
    : <ChatRoom name={userName} /> 
  }
}


export default App;
