import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput, Button } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Loginn = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


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
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                
            }
            if (error.code === 'auth/wrong-password') {
                console.log('wrong-password');
                Alert.alert("คุณเขียน password ผิด");

            }
            if (error.code === 'auth/user-not-found') {
                console.log('user-not-found');
                Alert.alert("คุณเขียน Email ผิด");
            }
            //console.error(error);
           
        });
    }

    function loginValidation() {
        if (email == "" || password == "") {
            Alert.alert("Please fill in fields");
        } else {
            login();
        }
    }
    
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/logo.png')}
                        style={{width:200, height: 200 }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon icon="eye" />}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={loginValidation}>
                        Login
                    </Button>
                </View>
            </View>
        )
}

export default Loginn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 340,
        alignSelf: "center",
        justifyContent: "center"
    },
    imageContainer: {
        alignSelf: 'center',
        paddingBottom: 14
    },
    inputContainer: {
        paddingBottom: 14,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center'
    }
})