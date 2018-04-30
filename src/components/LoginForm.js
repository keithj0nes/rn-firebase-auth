import React from 'react';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends React.Component {
  state = { email: ''};

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
