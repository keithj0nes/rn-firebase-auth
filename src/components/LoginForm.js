import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input, Spinner} from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    loginErr: ''
  };

  handleLogin(){
    const { email, password } = this.state;

    this.setState({loginErr: '', loading: true});


    if(email && password){
      //log in with email and password
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
        this.setState({loading: false, email: '', password: ''})
      })
      .catch(() => {
        //if login fails, create a user with credentials supplied
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(()=>{
            this.setState({loading: false, email: '', password: ''})
          })
          .catch(() => {
            //if creating a user fails, show loging error
            this.setState({loginErr: 'Authentication Failed', loading: false})
          })
      })
    } else {
      console.log('nothing porivded');
    }
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner />
    }

    return (
      <Button whenPressed={this.handleLogin.bind(this)}>
        Log in
      </Button>
    )
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
          {this.renderButton()}
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
