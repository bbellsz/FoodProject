import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import appStyles from '../assets/styles/appStyles';

const Search = ({navigation, route}) => {
  const restaurant = () => {
    navigation.navigate('Result');
  };
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    firestore()
      .collection('restaurant')
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
          });

          setName(data);

          console.log(data);
        });
      });

    console.log(name);
  }, []);

  //   function renderItem({item}) {
  //     return (
  //       <View>
  //         <TouchableOpacity
  //           style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
  //           <View>
  //             <Image source={{uri: item.image}} />
  //           </View>

  //           <Text style={styles.button}>{item.name}</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }

  const [text, onChangeText] = React.useState('search');
  return (
    <View style={appStyles.restaurantSearchBox}>
      <FlatList
        style={appStyles.scrollView2}
        data={name}
        renderItem={({item}) => (
          <View>
            <Pressable
              style={appStyles.btnViewPress}
              onPress={() =>
                navigation.navigate('Result', {
                  name: item.type,
                })
              }>
              <Text style={appStyles.btnTxt}>{item.type}</Text>
            </Pressable>
          </View>
        )}
      />
      {/* <Pressable
        onPress={() =>
          navigation.navigate('Result', {
            name: type,
          })
        }>
        <Text style={appStyles.restaurantInfoWhite}>{'Show result'}</Text>
      </Pressable> */}
    </View>
  );
};

export default Search;
