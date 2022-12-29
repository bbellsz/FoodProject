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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />

        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />

        <Stack.Screen
          name="ReviewPage"
          component={ReviewPage}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
