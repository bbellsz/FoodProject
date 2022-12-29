import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import appStyles from '../assets/styles/appStyles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Separator = () => <View style={appStyles.separator} />;

const ReviewPage = ({navigation, route}) => {
  const starImgFilled =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_filled.png?token=GHSAT0AAAAAAB42PQWTKW5G35XEVL6WD3MUY5MH6AA';
  const starImgCorner =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_corner.png?token=GHSAT0AAAAAAB42PQWTAUFCH47S4WL33OUWY5MH5PQ';
  const [name, setName] = useState([]);
  const [day, setDay] = useState([]);
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState('');
  const [detail, setDetail] = useState('');
  const [menu, setMenu] = useState('');
  const [rating, setRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const [image, setImage] = useState('');
  const [created, setCreated] = useState('');
  const [restaurantID, setRestaurantID] = useState('');
  useEffect(() => {
    firestore()
      .collection('restaurant')
      .where('name', '==', route.params.name)
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setData(data);
        console.log(data);
      });
  }, []);
  const addReview = async () => {
    await firestore()
      .collection('reviews')
      .add({
        // userID: auth().currentUser.uid,
        // created: firebase.firestore.FieldValue.serverTimestamp(),
        // timestamp: FieldValue.serverTimestamp(),
        // restID:
        topic: topic,
        detail: detail,
        menu: menu,
        rating: rating,
        // restaurantID: restaurantID(collection('restaurant'), _id),
      })
      .then(() => {
        console.log('Add review!');
        alert(topic + ' ' + detail + ' ');
        navigation.navigate('Restaurant');
      });
  };
  return (
    <View style={appStyles.containerMain}>
      <SafeAreaView style={appStyles.container}>
        <ScrollView>
          <View>
            <View style={appStyles.mainPageBox}>
              <View style={appStyles.fixToText3}>
                <View>
                  <Text style={appStyles.txtWriteReview}>
                    {data.map(item => item.name)}
                  </Text>
                  <Text style={appStyles.restaurantInfo4}>
                    <Image
                      style={appStyles.iconSize}
                      source={require('../assets/img/star_filled.png')}
                    />
                    4.9 2 เรตติ้ง (2 รีวิว)
                    {'\n'} ประเภทอาหาร: {data.map(item => item.type)}
                    {'\n'} เปิดวัน: {data.map(item => item.day)} เวลา{' '}
                    {data.map(item => item.time)} น.
                    {'\n'} เบอร์โทร: {data.map(item => item.phone)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text> </Text>
          {/* รีวิว*/}
          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>เขียนรีวิว</Text>
            <Separator />
            <Text style={appStyles.restaurantTxtName2}>ให้คะแนนร้าน</Text>
            <View style={appStyles.customRatingBarStyles}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.75}
                    key={item}
                    onPress={() => setRating(item)}>
                    <Image
                      style={appStyles.starImgStyle}
                      source={
                        item <= rating
                          ? {uri: starImgFilled}
                          : {uri: starImgCorner}
                      }
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text>{'\n'}</Text>
            <Text style={appStyles.restaurantInfo3}>หัวข้อเรื่องรีวิว</Text>
            <TextInput
              style={appStyles.input}
              placeholder="หัวข้อรีวิว"
              onChangeText={value => setTopic(value)}
            />

            <Text style={appStyles.restaurantInfo3}>รายละเอียดรีวิว</Text>
            <TextInput
              style={appStyles.input2}
              placeholder="รายละเอียดรีวิว"
              onChangeText={value => setDetail(value)}
            />

            <Text style={appStyles.restaurantInfo3}>เมนูเด็ด</Text>
            <TextInput
              style={appStyles.input}
              placeholder="รายการอาหารหรือเครื่องดื่มใดก็ได้ ที่ได้รับประทาน หรือ ชื่นชอบ"
              onChangeText={value => setMenu(value)}
            />
          </View>
          <Text> </Text>

          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>รูปภาพ</Text>
            <Separator />
            <View style={appStyles.fixToText}>
              <View style={appStyles.inputImg} />
              <View style={{width: 140}}>
                <Pressable
                  style={appStyles.btnImgPress}
                  onPress={() => Alert.alert('Choose')}>
                  <Text style={appStyles.txtBtnPress}>Choose File</Text>
                </Pressable>
                <Text style={appStyles.restaurantInfo}>
                  {'\n'}ไฟล์ GIF, JPG หรือ PNG ขนาดต่ำกว่า 1 Mb อ่านต่อได้ที่
                </Text>
              </View>
            </View>
          </View>
          <View style={appStyles.fixToText}>
            <Pressable
              style={appStyles.btnSavePress}
              onPress={() => addReview()}>
              <Text style={appStyles.txtBtnPress}>บันทึก</Text>
            </Pressable>
            <Pressable
              style={appStyles.btnCanclePress}
              onPress={() => navigation.navigate('Restaurant')}>
              <Text style={appStyles.txtBtnPress}>ยกเลิก</Text>
            </Pressable>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ReviewPage;
