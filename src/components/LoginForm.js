import React from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardItem } from './common';

class LoginForm extends React.Component {

  render(){
    return (
      <Card>
        <CardItem>
          <TextInput style={{height:20, width: 100}}/>
        </CardItem>
        <CardItem></CardItem>
        <CardItem>
          <Button>
            Log in
          </Button>
        </CardItem>
      </Card>
    )
  }
}

export default LoginForm;
