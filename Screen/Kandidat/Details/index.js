import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderHTML from 'react-native-render-html';
import Container from '../../../components/container';
import Loading from '../../../components/Loading';
import {showKandidatDetail} from '../../../Controllers/KandidatController';
import {API_APP} from '../../../environment';
import {getData} from '../../../helpers/Storage';
export default function Detail({navigation, route}) {
  const [kandidat, setKandidat] = useState([]);
  const [Visible, setVisible] = useState(true);
  const [user, setUser] = useState({});
  // setVisible(true);
  useEffect(() => {
    async function tests() {
      const data2 = await getData('kandidat');
      data2.data.filter(e => {
        if (e.id_kandidat == route.params.id) {
          setKandidat(e);
        }
      });
      setVisible(false);
      const data = await showKandidatDetail(route.params.id, navigation);
      const user = await getData('user');
      if (data && user) {
        setKandidat(data.data);
        setUser(user[0]);
        setVisible(false);
      }
    }
    tests();
  }, []);

  return (
    <Container padding={false}>
      <ScrollView>
        <View style={{flex: 1}}>
          <ImageBackground
            blurRadius={5}
            // imageStyle={{tintColor: '#26262630'}}
            source={{uri: API_APP + '/images/' + kandidat?.foto}}
            style={{
              justifyContent: 'space-between',
              backgroundColor: 'white',
              minHeight: 150,
              borderRadius: 2,
              alignkandidats: 'center',
              // padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              //   flexWrap: 'wrap',
            }}>
            <LinearGradient
              colors={['black', 'black']}
              style={{
                // backgroundColor: 'white',
                position: 'absolute',
                minHeight: 150,
                borderRadius: 2,
                alignkandidats: 'center',
                alignItems: 'center',
                opacity: 0.5,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                //   flexWrap: 'wrap',
              }}></LinearGradient>
            <View
              style={{
                position: 'absolute',
                zIndex: 999,
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'space-between',
              }}>
              <View>
                <Image
                  style={{width: 100, height: 100, borderRadius: 100}}
                  source={{uri: API_APP + '/images/' + kandidat?.foto}}
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}>
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {kandidat?.nama_ketua}
                  </Text>

                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        //   textAlign: 'justify',
                        // width: 100,
                        //   flexWrap: 'wrap',
                      }}>
                      {kandidat?.kelas_ketua} {kandidat?.jurusan_ketua}{' '}
                      {kandidat?.no_kelas_ketua}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {kandidat?.nama_wakil}
                  </Text>

                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                      }}>
                      {kandidat?.kelas_wakil} {kandidat?.jurusan_wakil}{' '}
                      {kandidat?.no_kelas_wakil}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#5F6FF6',
                      padding: 10,
                      marginTop: 8,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                      }}>
                      {user.status_peserta == 'sudah memilih'
                        ? ' Terima kasih sudah memilih '
                        : ' Vote'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* <Loading text={'Memuat...'} visible={Visible} /> */}

          <View style={{padding: 19}}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              "{kandidat?.slogan}"
            </Text>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
                  Visi :
                </Text>
                {/* <Text style={{color: 'black', fontSize: 17, marginTop: 10}}> */}
                <RenderHTML
                  baseStyle={{color: 'black'}}
                  contentWidth={200}
                  source={{
                    html: kandidat?.visi
                      ? kandidat?.visi
                      : '<h4>Loading...</h4>',
                  }}
                />
                {/* </Text> */}
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{color: 'black', fontSize: 19, fontWeight: 'bold'}}>
                  Misi :
                </Text>
                {/* <Text style={{color: 'black', fontSize: 17, marginTop: 10}}> */}
                {/* {kandidat?.misi} */}
                <RenderHTML
                  baseStyle={{color: 'black'}}
                  contentWidth={200}
                  source={{
                    html: kandidat?.misi
                      ? kandidat?.misi
                      : '<h4>Loading...</h4>',
                  }}
                />
                {/* </Text> */}
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                disabled={user.status_peserta == 'sudah memilih' ? true : false}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 2,
                }}>
                <Text
                  style={{
                    color: '#5F6FF6',
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                  }}>
                  {user.status_peserta == 'sudah memilih'
                    ? ' Terima kasih sudah memilih '
                    : ' Pilih Kami'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
