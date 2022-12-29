import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  FlatList,
  StatusBar,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import appStyles from '../assets/styles/appStyles';

const Result = ({navigation, route}) => {
  const restaurant = () => {
    navigation.navigate('Restaurant');
  };
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [day, setDay] = useState([]);
  const [description, setDescription] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    firestore()
      .collection('restaurant')
      .where('name', '==', route.params.name)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setName(documentSnapshot.data().name);
          setImage(documentSnapshot.data().image);
          setDay(documentSnapshot.data().day);
          setDescription(documentSnapshot.data().description);
          setAddress(documentSnapshot.data().address);
          setPhone(documentSnapshot.data().phone);
          setType(documentSnapshot.data().type);
        });
      });
  }, []);

  const [text, onChangeText] = React.useState('search');
  return (
    <View style={appStyles.restaurantSearchBox}>
      <Text>{name}</Text>
    </View>
  );
};

export default Result;
