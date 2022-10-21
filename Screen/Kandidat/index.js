import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/container';
import {showKandidat} from '../../Controllers/KandidatController';
import {API_APP} from '../../environment';
import {getData} from '../../helpers/Storage';
export default function Kandidat({navigation}) {
  const [Visible, setVisible] = useState(true);
  const [kandidat, setKandidat] = useState([]);
  useEffect(() => {
    async function tests() {
      const data2 = await getData('kandidat');
      setKandidat(data2.data);
      setVisible(false);
      const data = await showKandidat(navigation);
      if (data) {
        setKandidat(data.data);
        setVisible(false);
      } else {
        setVisible(false);
      }
      setTimeout(() => {
        setVisible(false);
      }, 10000);
    }
    tests();
  }, []);
  return (
    <Container padding={false}>
      {/* <Loading text={'Memuat...'} visible={Visible} /> */}
      <View>
        <FlatList
          style={{padding: 19}}
          data={kandidat}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push('Detail', {
                  id: item.id_kandidat,
                })
              }
              activeOpacity={0.8}
              style={{
                backgroundColor: 'white',
                minHeight: 200,
                borderRadius: 10,
                marginBottom: 20,
                alignItems: 'center',
                padding: 20,
              }}>
              <View>
                <Image
                  style={{width: 60, height: 60, borderRadius: 100}}
                  source={{uri: API_APP + '/images/' + item.foto}}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#303030',
                  }}>
                  {item.nama_ketua} - {item.nama_wakil}
                </Text>

                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#303030',
                  }}>
                  {item.kelas_ketua} {item.jurusan_ketua} {item.no_kelas_ketua}{' '}
                  - {item.kelas_wakil} {item.jurusan_wakil}
                  {item.no_kelas_wakil}
                </Text>
                <Text style={{marginTop: 5, fontSize: 16, textAlign: 'center'}}>
                  {/* "{item.slogan}"" */}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
}
