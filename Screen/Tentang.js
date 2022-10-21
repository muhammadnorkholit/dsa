import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/container';

export default function Tentang() {
  return (
    <Container padding={true}>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            minHeight: 100,
            borderRadius: 4,
            padding: 15,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              letterSpacing: 0.3,
              marginBottom: 10,
              color: '#303030',
            }}>
            Ketosin adalah sebuah aplikasi yang memiliki basis android yang
            digunakan dalam proses pemilihan ketua osis masa jabatan baru
            memanfaatkan teknologi smartphone.
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              letterSpacing: 0.3,
              color: '#303030',
            }}>
            Diharapkan aplikasi ini dapat menghemat biaya ,waktu, dan tenaga
            pada saat proses pelaksanaan pemilihan
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            minHeight: 100,
            borderRadius: 4,
            padding: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              letterSpacing: 0.3,
              marginBottom: 10,
              color: '#303030',
            }}>
            Ketosin adalah sebuah aplikasi yang memiliki basis android yang
            digunakan dalam proses pemilihan ketua osis masa jabatan baru
            memanfaatkan teknologi smartphone.
          </Text>
        </View>
      </View>
    </Container>
  );
}
