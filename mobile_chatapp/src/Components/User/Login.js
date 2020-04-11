import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

const Login = () => {
  const [payload, ssetPayload] = useState({
    name: '',
    email: '',
  })

  const setter = (key, value)=>{
    ssetPayload({
      ...payload,
      [key]: value
    })
  }

  const submit = ()=>{
    console.log(payload);
  }

  return (
    <View style={ styles.main }>
      <Text style={ styles.title }>Login</Text>
      <TextInput
        onChangeText = { (e)=> setter('name', e) }
        value={ payload.name }
        placeholder="Enter name"
        style={ styles.input }
      />
      <TextInput
        onChangeText = { (e)=> setter('email', e) }
        value={ payload.email }
        placeholder="Enter email"
        style={ styles.input }
      />
      <Button
        onPress={ submit }
        title="Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent: 'center',
    padding: 45,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff'
  }
})

export default Login;
