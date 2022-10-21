import React, {useState, useEffect} from 'react';
import {Alert, Image, ScrollView} from 'react-native';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Container from '../components/container';
import {getData, saveData} from '../helpers/Storage';
import {API_APP} from '../environment';

export default function Home({navigation}) {
  const [user, setUser] = useState({});

  const logout = () => {
    // Alert.alert('Pemberitahuan', 'Yakin ingin keluar ?');
    Alert.alert('Pemberitahuan', 'Apakah anda yakin untuk keluar ?', [
      {
        text: 'batal',
        onPress: () => false,
        style: 'cancel',
      },
      {
        text: 'ok',
        onPress: () => navigation.replace('index'),
        style: 'cancel',
      },
    ]);
  };

  useEffect(() => {
    async function tests() {
      const data = await getData('user');
      setUser(data[0]);
    }
    tests();
  }, []);
  return (
    <Container
      padding={true}
      // padding={true}
      style={{backgroundColor: 'white', paddingHorizontal: 13, paddingTop: 10}}>
      <View>
        <ImageBackground
          source={require('./../img/background.png')}
          resizeMode={'cover'}
          style={{
            // backgroundColor: 'white',
            padding: 20,
            height: 280,
            borderRadius: 3,
          }}>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text
              style={{
                color: '#6799E8',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              HALO, {user.nama_peserta}
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              resizeMode="contain"
              source={require('./../img/kpo.png')}
              style={{width: 100, height: 100}}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#6799E8',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              {/* KETOSIN */}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Menu
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            // justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: 'white',
              borderRadius: 2,
              height: 152,
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 20,
            }}
            onPress={() => navigation.push('Kandidat')}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#5F6FF6',
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./../img/kandidat.png')}
                />
              </View>
              <Text
                style={{color: '#6799E8', fontSize: 17, fontWeight: 'bold'}}>
                Kandidat
              </Text>
              <Text
                style={{
                  color: '#6799E8',
                  fontSize: 13,
                  fontWeight: 'semibold',
                }}>
                OSIS
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 0.2}}></View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 2,
              height: 152,

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => navigation.push('Tentang')}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#5F6FF6',
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  marginBottom: 5,
                }}>
                <Image
                  resizeMode="contain"
                  style={{width: 10, height: 50}}
                  source={require('./../img/tentang.png')}
                />
              </View>
              <Text
                style={{color: '#6799E8', fontSize: 17, fontWeight: 'bold'}}>
                Tentang
              </Text>
              <Text
                style={{
                  color: '#6799E8',
                  fontSize: 13,
                  fontWeight: 'semibold',
                }}>
                Tentang Aplikasi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.09}} />

        <View
          style={{
            // marginTop: 13,
            flex: 1,
            // justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: 'white',
              borderRadius: 2,
              height: 152,

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => navigation.push('Hasil')}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#5F6FF6',
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./../img/hasil.png')}
                />
              </View>
              <Text
                style={{color: '#6799E8', fontSize: 17, fontWeight: 'bold'}}>
                Hasil
              </Text>
              <Text
                style={{
                  color: '#6799E8',
                  fontSize: 13,
                  fontWeight: 'semibold',
                }}>
                Hasil Pemilihan
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flex: 0.2}}></View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 2,
              height: 152,

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}
            onPress={() => logout()}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: '#5F6FF6',
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('./../img/logout.png')}
                />
              </View>
              <Text
                style={{color: '#6799E8', fontSize: 17, fontWeight: 'bold'}}>
                Logout
              </Text>
              <Text
                style={{
                  color: '#6799E8',
                  fontSize: 13,
                  fontWeight: 'semibold',
                }}>
                Keluar Aplikasi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 30, marginTop: 20}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Ketosin 3.0.2
        </Text>
      </View>
    </Container>
  );
}
