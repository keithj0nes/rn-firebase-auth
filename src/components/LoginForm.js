import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    loginErr: ''
  };

  handleLogin(){
    const { email, password } = this.state;
    this.setState({loginErr: ''})
    if(email && password){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            console.log('login failed');
            this.setState({loginErr: 'Authentication Failed'})
          })
      })
    } else {
      console.log('nothing porivded');
    }

  }

  render(){
    console.log(this.state);

    return (
      <Card>
        <CardItem>
          <Input
            label={'email'}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder={'hello@example.com'}
          />
        </CardItem>

        <CardItem>
          <Input
            label={'password'}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder={'******'}
            secureTextEntry={true}
          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.state.loginErr}
        </Text>

        <CardItem>
          <Button whenPressed={this.handleLogin.bind(this)}>
            Log in
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm;
