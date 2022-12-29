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
  TouchableOpacity,
  root,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import appStyles from '../assets/styles/appStyles';
const Separator = () => <View style={appStyles.separator} />;
// const Restaurant = ({navigation}) => {
//   const onPress = () => {
//     navigation.navigate('ReviewPage');
//   };

const Restaurant = ({navigation, route}) => {
  const starImgFilled =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_filled.png?token=GHSAT0AAAAAAB42PQWTKW5G35XEVL6WD3MUY5MH6AA';
  const starImgCorner =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_corner.png?token=GHSAT0AAAAAAB42PQWTAUFCH47S4WL33OUWY5MH5PQ';

  const onPress = () => {
    navigation.navigate('AddReview');
  };
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [day, setDay] = useState([]);
  const [description, setDescription] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [type, setType] = useState([]);
  const [data, setData] = useState([]);

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

    firestore()
      .collection('reviews')
      //.where('name', '==', route.params.name)
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
  function renderItem({item}) {
    return <View></View>;
  }
  return (
    <View style={appStyles.containerMain}>
      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView2}>
          {/* <Image style={appStyles.restaurantDetailImg} source={{uri: image}} /> */}
          {console.log(image)}
          <View style={appStyles.container}>
            <View>
              <View style={appStyles.mainPageBox}>
                <Text style={appStyles.restaurantTxtName}>
                  {name}
                  {'\n'}
                  <Text style={appStyles.restaurantInfo}>
                    <Image
                      style={appStyles.iconSize}
                      source={require('../assets/img/star_filled.png')}
                    />
                    4.9 2 รีวิว
                    {'\n'}
                    {description}
                    {'\n'}
                    {type}
                  </Text>
                </Text>
                <View style={appStyles.fixToText}>
                  <View style={appStyles.restaurantReviewBox}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('ReviewPage', {
                          name: name,
                        })
                      }>
                      <Text style={appStyles.restaurantInfoWhite}>
                        <Image
                          style={appStyles.iconSize}
                          source={require('../assets/img/pencil.png')}
                        />
                        {' เขียนรีวิว'}
                      </Text>
                    </Pressable>
                  </View>

                  <View style={appStyles.iconBox}>
                    <Pressable onPress={() => Alert.alert('Bookmark')}>
                      <Image
                        style={appStyles.iconSize}
                        source={require('../assets/img/bookmark.png')}
                      />
                    </Pressable>
                  </View>

                  <View style={appStyles.iconBox}>
                    <Pressable onPress={() => Alert.alert('Share')}>
                      <Image
                        style={appStyles.iconSize}
                        source={require('../assets/img/share.png')}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <Text> </Text>
          </View>

          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantInfoDetailHead}>
              {'\n'}
              เวลาเปิด :
              <Text style={appStyles.restaurantInfoDetail}> {day}</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              ที่ตั้ง :
              <Text style={appStyles.restaurantInfoDetail}> {address}</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              เบอร์โทร :
              <Text style={appStyles.restaurantInfoDetail}> {phone}</Text>
            </Text>
          </View>
          <Text> </Text>
          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantInfoDetail}>
              2 รีวิว
              <Text> 2 เรตติ้ง</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              4.9
              <Text> </Text>
              <Text style={appStyles.restaurantInfoDetail}>จาก 5</Text>
            </Text>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View>
                  <View style={appStyles.fixToText}>
                    <Image
                      style={appStyles.iconProfile}
                      source={require('../assets/img/person.png')}
                    />
                    <Text style={appStyles.txtNameProfile}>username</Text>
                  </View>
                  <Text style={appStyles.txtRating}>{item.rating} คะแนน</Text>
                  <Text style={appStyles.txtReview}>{item.topic}</Text>
                  <Text style={appStyles.txtReview2}>
                    เมนูเด็ด: {item.menu} {'\n'}
                    {item.detail}
                  </Text>
                  <Separator />
                </View>
              )}
            />

            {/* <View>
              <View style={appStyles.fixToText}>
                <Image
                  style={appStyles.iconProfile}
                  source={require('../assets/img/person.png')}
                />
                <Text style={appStyles.txtNameProfile}>Amonnat Kaewnok</Text>
              </View>

              <View style={appStyles.fixToText2}>
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Text style={appStyles.dateReview}>1 พ.ย. 2022</Text>
              </View>
              <Text style={appStyles.txtReview}>อร่อยมาก บริการดี</Text>
              <Text style={appStyles.txtReview2}>
                ราคาต่อหัว : 100-150 {'\n'}
                เมนูเด็ด : ปลากระพงทอดน้ำปลา {'\n'}
                {'   '}ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน
                ข้าวไก่ทอดสมุนไพร ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาติดี...คุ้ม...
              </Text>
            </View> */}
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Restaurant;
