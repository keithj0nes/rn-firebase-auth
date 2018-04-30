import React from 'react';
import firebase from 'firebase';
import fb from './config';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null,
    user: null,
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true, user})
      } else {
        this.setState({loggedIn: false, user: null})
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Button whenPressed={this.handleLogOut}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Spinner />
          </View>
        );
    }
  }

  handleLogOut(){
    firebase.auth().signOut()
  }
  render(){
    console.log(this.state.loggedIn);
    return (
      <View>
        <Header title={(this.state.user && this.state.user.email) || 'Authentication'} />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
