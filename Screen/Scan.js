'use strict';

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {checkScan} from '../Controllers/ScanController';
import Loading from '../components/Loading';
import Container from '../components/container';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
function Scan({navigation}) {
  const [visible, setVisible] = useState(false);
  const [flash, setFlash] = useState(false);

  const onSuccess = e => {
    setVisible(true);
    if (e.data) {
      checkScan({navigation, data: e.data}).then(e => {
        setTimeout(() => {
          setVisible(e);
        }, 3000);
      });
    } else {
      setVisible(false);
    }
  };

  return (
    <QRCodeScanner
      reactivate={false}
      showMarker={true}
      markerStyle={{
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 30,
      }}
      cameraContainerStyle={{backgroundColor: 'black'}}
      cameraStyle={{height: SCREEN_HEIGHT, backgroundColor: 'blue'}}
      onRead={onSuccess}
      customMarker={
        visible ? (
          <Container padding={true}>
            <Loading visible={visible} text={'Scanning...'} />
          </Container>
        ) : undefined
      }
      flashMode={
        flash
          ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off
      }
    />
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Scan;
