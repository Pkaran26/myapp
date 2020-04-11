import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Chat = () => {
  return (
    <View style={ styles.main }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Chat App</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  header: {
    backgroundColor: 'red',
    padding: 15
  },
  title: {
    color: '#fff',
    fontSize: 26
  }
})

export default Chat;
