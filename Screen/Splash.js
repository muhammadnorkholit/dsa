import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/container';

export default function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('index', {token: 1});
  }, 2000);
  return (
    <Container padding={true}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          alignSelf: 'center',
          color: 'white',
        }}>
        KETOSIN 2022
      </Text>
    </Container>
  );
}
