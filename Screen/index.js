import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, TextInput, Animated, Easing} from 'react-native';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {checkScan} from '../Controllers/ScanController';
import Container from '../components/container';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

// import {Gesture}
export default function Index({navigation, route}) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  // const [top, setTop] = useState(510);
  const [msg, setMsg] = useState(true);
  const [QRCode, setQRCode] = useState(null);
  const [swap, setSwap] = useState(false);
  // const setSwap = () => {};
  const handleSwap = useRef(new Animated.Value(0)).current;
  const bgOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(handleSwap, {
      duration: 500,
      delay: 100,
      useNativeDriver: true,
      toValue: swap ? -250 : 0,
      // easing: Easing.bounce,
    }).start();
    Animated.timing(bgOpacity, {
      duration: 1000,
      delay: 100,
      useNativeDriver: true,
      toValue: swap ? 1 : 0,
      // easing: Easing.bounce,
    }).start();
  }, [swap]);
  if (route.params?.token && msg) {
    setMsg(false);
    setTimeout(() => {
      Alert.alert(
        'Pemberitahuan',
        'Pastikan internet stabil saat menggunakan ketosin',
      );
    }, 100);
  }

  const gesture = Gesture.Pan()
    .onStart(es => console.log(es))
    .onUpdate(e => {
      setSwap(!swap);
    });
  const submit = () => {
    checkScan({navigation, data: QRCode});
  };

  return (
    <Container padding={false}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 40,
              marginVertical: 10,
              fontWeight: 'bold',
              marginTop: 50,
            }}>
            KETOSIN
          </Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image
              resizeMode="contain"
              style={{width: 200, height: 200}}
              source={require('./../img/kpo.png')}
            />
          </View>
          {/* <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              marginVertical: 10,
              fontWeight: 'bold',
            }}>
            Masuk
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Masuk untuk akses KETOSIN
          </Text>
        </View> */}
          <Animated.View
            style={{
              position: 'absolute',
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              backgroundColor: swap ? '#202124ad' : null,
            }}>
            <GestureDetector>
              <Animated.View
                style={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  height: SCREEN_HEIGHT,
                  right: 0,
                  top: 480,
                  width: 360,
                  transform: [{translateY: handleSwap}],
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  elevation: 9,

                  // bottom: 0,
                }}>
                <Animated.View style={{opacity: bgOpacity}}>
                  <TouchableOpacity
                    style={{
                      color: 'black',
                      padding: 10,
                      alignItems: 'center',
                      display: swap ? 'flex' : 'none',
                    }}
                    onPress={() => {
                      setSwap(!swap);
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        // backgroundColor: '#5F6FF6',
                        paddingHorizontal: 14,
                        color: 'gray',
                        fontSize: 15,
                        borderRadius: 10,
                        paddingVertical: 5,
                      }}>
                      Tutup
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    width: '100%',
                    minHeight: 150,
                    marginTop: 10,
                    padding: 14,
                    // borderTopRightRadius: 100,
                    // position: 'absolute',
                    // flex: 1,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 21,
                    }}>
                    PENGGUNAAN SCAN
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    Gunakan kamera dan scan QRcode untuk masuk
                  </Text>
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => navigation.push('scan')}
                      style={{backgroundColor: '#5F6FF6', padding: 10}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Mulai Scan
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    color: 'black',
                    padding: 10,
                    alignItems: 'center',
                    display: !swap ? 'flex' : 'none',
                    // flex: 1,
                    marginTop: 20,
                    // justifyContent: 'flex-end',
                  }}
                  onPress={() => {
                    setSwap(!swap);
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      // backgroundColor: '#5F6FF6',
                      paddingHorizontal: 14,
                      color: 'gray',
                      fontSize: 12,
                      borderRadius: 10,
                      paddingVertical: 5,
                    }}>
                    OPSI LAIN
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    width: '100%',
                    minHeight: 200,
                    height: 'auto',
                    marginTop: 30,
                    padding: 14,
                    // flex: 1,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 21,
                    }}>
                    MASUK MANUAL
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      marginTop: 10,
                    }}>
                    Masukkan Qr code secara manual
                  </Text>
                  <TextInput
                    onChangeText={text => setQRCode(text)}
                    placeholder="QR CODE"
                    style={{
                      borderBottomColor: 'gray',
                      borderBottomWidth: 1,
                      padding: 0,
                      paddingHorizontal: 5,
                      paddingTop: 10,
                    }}
                  />
                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => submit()}
                      style={{backgroundColor: '#5F6FF6', padding: 10}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Masuk
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{height: 30, marginTop: 20}}>
                  <Text
                    style={{
                      color: '#5F6FF6',
                      textAlign: 'center',
                      fontSize: 19,
                      fontWeight: 'bold',
                    }}>
                    Ketosin 3.0.2
                  </Text>
                </View>
              </Animated.View>
            </GestureDetector>
          </Animated.View>
        </View>
      </GestureHandlerRootView>
    </Container>
  );
}
