import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screen/HomePage';
import Login from './screen/Login';
import MainPage from './screen/MainPage';
import Restaurant from './screen/Restaurant';
import ReviewPage from './screen/ReviewPage';
import Loginn from './screen/Loginn';
import Search from './screen/Search';
import Result from './screen/Result';
import profile from './screen/profile';
import ListFirebase from './screen/ListFirebase';
import {SafeAreaView} from 'react-native-safe-area-context';
import home from './assets/img/home.png';
import logout from './assets/img/logout.png';
import menu from './assets/img/menu.png';
import firestore from '@react-native-firebase/firestore';
const Stack = createNativeStackNavigator();

const App = ({navigation, route}) => {
  const [name, setName] = useState([]);
  const [image, setImage] = useState('');
  useEffect(() => {
    firestore()
      .collection('users')
      // .where('name', '==', route.params.name)
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        console.log(data);
      });
  }, []);
  const [currentTab, setCurrentTab] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(2)).current;
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="HomePage"
    //       component={HomePage}
    //       options={{headerShown: false}}
    //     />

    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{headerShown: false}}
    //     />

    //     <Stack.Screen
    //       name="MainPage"
    //       component={MainPage}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Search"
    //       component={Search}
    //       options={{
    //         title: 'FOODIE GUIDE',
    //         headerStyle: {
    //           backgroundColor: '#ffcd9b',
    //         },
    //         headerTintColor: 'black',
    //         headerTitleStyle: {
    //           fontFamily: 'MN Tomyam',
    //           padding: 10,
    //           margin: 5,
    //           fontSize: 26,
    //         },
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Result"
    //       component={Result}
    //       options={{
    //         title: 'FOODIE GUIDE',
    //         headerStyle: {
    //           backgroundColor: '#ffcd9b',
    //         },
    //         headerTintColor: 'black',
    //         headerTitleStyle: {
    //           fontFamily: 'MN Tomyam',
    //           padding: 10,
    //           margin: 5,
    //           fontSize: 26,
    //         },
    //       }}
    //     />

    //     <Stack.Screen
    //       name="Restaurant"
    //       component={Restaurant}
    //       options={{
    //         title: 'FOODIE GUIDE',
    //         headerStyle: {
    //           backgroundColor: '#ffcd9b',
    //         },
    //         headerTintColor: 'black',
    //         headerTitleStyle: {
    //           fontFamily: 'MN Tomyam',
    //           padding: 10,
    //           margin: 5,
    //           fontSize: 26,
    //         },
    //       }}
    //     />

    //     <Stack.Screen
    //       name="ReviewPage"
    //       component={ReviewPage}
    //       options={{
    //         title: 'FOODIE GUIDE',
    //         headerStyle: {
    //           backgroundColor: '#ffcd9b',
    //         },
    //         headerTintColor: 'black',
    //         headerTitleStyle: {
    //           fontFamily: 'MN Tomyam',
    //           padding: 10,
    //           margin: 5,
    //           fontSize: 26,
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image
          source={require('./assets/img/person.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'whiite',
            marginTop: 20,
          }}>
          {name}
        </Text>

        <TouchableOpacity>
          <Text style={{marginTop: 6, color: 'white'}}>View profile</Text>
        </TouchableOpacity>

        <View style={{flexGrow: 1, marginTop: 50}}>
          {}
          {TabButton(MainPage, setMainPage, 'MainPage', home)}
          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Home', home)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, 'Logout', logout)}</View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Tranforming View
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true,
            }).start();

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 220,
              duration: 300,
              useNativeDriver: true,
            }).start();

            setShowMenu(!showMenu);
          }}>
          <Image
            source={menu}
            style={{
              width: 30,
              height: 30,
              tintColor: 'black',
              marginTop: 40,
            }}></Image>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20,
            }}>
            {currentTab}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'Logout') {
          //...
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparant',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default App;
