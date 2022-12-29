import {StyleSheet, Text, View, Image, Alert, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import appStyles from '../assets/styles/appStyles';

const Login = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('MainPage');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          onPress = {onPress};
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('wrong-password');
          Alert.alert('คุณเขียน password ผิด');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('user-not-found');
          Alert.alert('คุณเขียน Email ผิด');
        }
        //console.error(error);
      });
  };

  function loginValidation() {
    if (email == '' || password == '') {
      Alert.alert('กรอกข้อมูลให้ครบถ้วน');
    } else {
      login();
    }
  }
  return (
    <View style={appStyles.containerLogin}>
      <Text style={appStyles.txtLoginBlack}>Welcome back!</Text>
      <Text style={appStyles.txtLogin}>Username</Text>
      <TextInput
        style={appStyles.inputLogin}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={appStyles.txtLogin}>Password</Text>
      <TextInput
        style={appStyles.inputLogin}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Text></Text>
      <Button
        mode="contained"
        style={appStyles.btnLogin}
        onPress={loginValidation}>
        <Text style={appStyles.txtBtnLogin}>Login</Text>
      </Button>
    </View>
  );
};

export default Login;
