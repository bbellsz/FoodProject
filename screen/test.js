import * as React from 'react';
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
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
const Separator = () => <View style={styles.separator} />;
export default function Restaurant() {
  return (
    <View style={styles.container1}>
      <View style={styles.top}></View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image style={styles.image} source={require('../assets/img/1.jpg')} />

          <View style={styles.container}>
            <Text> </Text>
            <View>
              <View style={styles.box4}>
                <Text style={styles.text1}>
                  TOO TIME
                  {'\n'}
                  <Text
                    style={{
                      color: 'black',
                      paddingLeft: 10,
                      backgroundColor: '#f19b38',
                      flex: 0.3,
                      fontSize: 14,
                      height: 18,
                    }}>
                    {/* <AntDesign name="star" size={15} color="black" /> */}
                    4.9
                  </Text>
                  {/* <Text style={{ color: "#8B8B8B", paddingLeft: 10, flex: 0.3, fontSize: 14, height: 18, }}>     2 รีวิว</Text> */}
                  <Text style={styles.text2}> คาเฟ่, ร้านอาหาร</Text>
                </Text>
                <Separator />
                <View style={styles.fixToText}>
                  <View style={styles.box}>
                    <Text
                      style={styles.text4}
                      onPress={() => Alert.alert('Left button pressed')}>
                      {/* <EvilIcons name="pencil" size={27} color="white" /> */}
                      เขียนรีวิว
                    </Text>
                  </View>

                  <View style={styles.box2}>
                    <Text
                      style={styles.Icon1}
                      onPress={() => Alert.alert('Left button pressed')}>
                      {/* <Feather name="camera" size={24} color="black" /> */}
                    </Text>
                  </View>
                  <View style={styles.box2}>
                    <Text
                      style={styles.Icon1}
                      onPress={() => Alert.alert('Left button pressed')}>
                      {/* <Feather name="bookmark" size={24} color="black" /> */}
                    </Text>
                  </View>

                  <View style={styles.box2}>
                    <Text
                      style={styles.Icon1}
                      onPress={() => Alert.alert('Left button pressed')}>
                      {/* <AntDesign name="sharealt" size={22} color="black" /> */}
                    </Text>
                  </View>
                  <Text style={styles.text2}>{'\n'}</Text>
                </View>
              </View>
            </View>
            <Text> </Text>
          </View>

          <View style={styles.box4}>
            <Text style={styles.text3}>
              {'\n'}
              เวลาเปิด :
              <Text style={styles.text2}> อังคาร - อาทิตย์ 10:00 - 21:00</Text>
            </Text>
            <Text style={styles.text3}>
              ที่ตั้ง :
              <Text style={styles.text2}> 213/16 หมู่ 3 นครศรีธรรมราช</Text>
            </Text>
            <Text style={styles.text3}>
              เบอร์โทร :
              <Text style={styles.text2}> 084-6983273, 086-9449317</Text>
              {'\n'}
            </Text>
          </View>
          <Text> </Text>
          <View style={styles.box4}>
            <Text style={styles.text3}>
              {'\n'}2 รีวิว
              <Text
                style={{
                  color: '#808B96',
                  paddingLeft: 10,
                  flex: 0.3,
                  fontSize: 12,
                  height: 18,
                }}>
                {' '}
                2 เรตติ้ง
              </Text>
            </Text>
            <Text
              style={{
                color: '#f19b38',
                paddingLeft: 0,
                flex: 1,
                fontSize: 30,
                textAlign: 'center',
              }}>
              4.9
              <Text> </Text>
              <Text
                style={{
                  color: '#808B96',
                  paddingLeft: 0,
                  flex: 1,
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                จาก 5
              </Text>
            </Text>
            <Text style={styles.text2}>
              <Text
                style={styles.text3}
                onPress={() => Alert.alert('Left button pressed')}>
                ยอดนิยม
                {/* <AntDesign name="caretdown" size={12} color="#f19b38" /> */}
              </Text>
            </Text>
            <View>
              <View style={styles.fixToText}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../assets/img/2.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    margin: 5,
                    flex: 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Sirada Buoonchuan
                  {'\n'}
                  <Text
                    style={{
                      color: 'green',
                      paddingLeft: 0,
                      flex: 1,
                      fontSize: 11,
                    }}>
                    ยืนยันตัวตนแล้ว
                  </Text>
                </Text>
              </View>

              <View style={styles.fixToText2}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Text
                  style={{
                    color: 'gray',
                    margin: 5,
                    flex: 0,
                    fontSize: 13,
                    paddingLeft: 1,
                  }}>
                  1 พ.ย. 2022
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingLeft: 50,
                }}>
                อร่อยมาก บริการดี
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                ราคาต่อหัว : 100-150
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                เมนูเด็ด : ปลากระพงทอดน้ำปลา
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                }}>
                ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน ข้าวไก่ทอดสมุนไพร
                ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาดี...คุ้ม...
              </Text>
              <View style={styles.fixToText}>
                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    1 Like
                  </Text>
                </View>
                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    0 comment
                  </Text>
                </View>

                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    share
                  </Text>
                </View>
              </View>
              <Separator />
            </View>

            <View>
              <View style={styles.fixToText}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../assets/img/2.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    margin: 5,
                    flex: 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Amonnat Kaewnok
                  {'\n'}
                  <Text
                    style={{
                      color: 'green',
                      paddingLeft: 0,
                      flex: 1,
                      fontSize: 11,
                    }}>
                    ยืนยันตัวตนแล้ว
                  </Text>
                </Text>
              </View>

              <View style={styles.fixToText2}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/3.png')}
                />
                <Text
                  style={{
                    color: 'gray',
                    margin: 5,
                    flex: 0,
                    fontSize: 13,
                    paddingLeft: 1,
                  }}>
                  1 พ.ย. 2022
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingLeft: 50,
                }}>
                อร่อยมาก บริการดี
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                ราคาต่อหัว : 100-150
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                เมนูเด็ด : ปลากระพงทอดน้ำปลา
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                }}>
                ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน ข้าวไก่ทอดสมุนไพร
                ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาดี...คุ้ม...
              </Text>
              <View style={styles.fixToText}>
                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    1 Like
                  </Text>
                </View>
                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    0 comment
                  </Text>
                </View>

                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    share
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <Text> </Text>
          <View style={{backgroundColor: 'white'}}>
            <Text
              style={{
                color: 'black',
                margin: 30,
                flex: 1,
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft: 10,
                textAlign: 'certer',
              }}
              onPress={() => Alert.alert('Left button pressed')}>
              Footer
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    backgroundColor: '#FEF5E7',
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    backgroundColor: '#fcf1e8',
  },
  image: {
    height: 300,
    width: 330,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 4,
  },
  fixToText2: {
    flexDirection: 'row',
    margin: 4,
    paddingLeft: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  box: {
    flex: 0.4,
    //backgroundColor: "#F08080",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#f19b38',
    width: 200,
    height: 40,
    justifyContent: 'space-around',
  },
  box2: {
    flex: 0.15,
    //backgroundColor: "#F08080",
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    width: 50,
    height: 40,
    justifyContent: 'center',
  },
  box3: {
    flex: 0.5,
    //backgroundColor: "#F08080",
    borderRadius: 10,
    backgroundColor: '#F08080',
    width: 200,
    height: 40,
    justifyContent: 'space-around',
  },
  box4: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  box5: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    //width: 100,
    height: 40,
    // justifyContent: 'center',
  },
  text1: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  text2: {
    //fontWeight: 'bold',
    margin: 5,
    paddingLeft: 20,
    fontSize: 15,
    textAlign: 'left',
    color: '#808B96',
  },
  text3: {
    fontWeight: 'bold',
    margin: 5,
    paddingLeft: 20,
    fontSize: 15,
    textAlign: 'left',
    color: '#f19b38',
  },
  Icon1: {
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 5,
  },
  text4: {
    margin: 2,
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});