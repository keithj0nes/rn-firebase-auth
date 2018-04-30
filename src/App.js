import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends React.Component {
  render(){
    return (
      <View>
        <Header title='Authentication' />
        <Text> my app! </Text>
      </View>
    )
  }
}

export default App;
