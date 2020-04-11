import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Login from './src/Components/User/Login'
import Chat from './src/Components/Chat/Chat'

const App: () => React$Node = () => {
  return (
    <View style={ styles.main }>
      <Chat />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex:1
  }
})

export default App;
