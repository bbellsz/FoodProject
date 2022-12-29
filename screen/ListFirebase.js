import { View, Text , FlatList} from 'react-native'
import React,{useEffect, useState} from 'react'
import firestore from '@react-native-firebase/firestore';

const ListFirebase = () => {

     const [name , setName] = useState([]);
   


     useEffect(() => {
         const subscriber = firestore()
           .collection('users')
           .onSnapshot(querySnapshot => {
             const users = [];
    
             querySnapshot.forEach(documentSnapshot => {
               users.push({
                 ...documentSnapshot.data(),
                 key: documentSnapshot.id,
               });
             });
    
             setName(users);
             console.log(users)
           });
           return () => subscriber();
         }, []);

  return (
    <View>
      <Text>listFirebase</Text>
      <FlatList
        data={name}
        renderItem={({item}) => (
          
            
        <Text>{item.email}   {item.password}</Text>

    
          
        )}
      />
      

    </View>
  )
}

export default ListFirebase