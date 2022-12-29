import {StyleSheet, Button, View, Text, Pressable, Image, ScrollView} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const HomePage = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/img/logo.png')} />
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>ENTER</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcd9b',
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    height: 250,
    width: 250,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#f19b38',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#f19b38',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textBlack: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 45,
    fontSize: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    paddingLeft: 6,
    marginVertical: 6,
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
});

export default HomePage;