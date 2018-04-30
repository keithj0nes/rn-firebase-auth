import React from 'react';
import firebase from 'firebase';
import fb from './config';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  render(){
    return (
      <View>
        <Header title='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;
