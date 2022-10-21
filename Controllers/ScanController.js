import {Alert} from 'react-native';
import {API_APP} from '../environment';
import {saveData} from '../helpers/Storage';
import GetLocation from 'react-native-get-location';
import {getHasil} from './HasilController';
import {CommonActions} from '@react-navigation/native';

export function checkScan({navigation, data}) {
  return fetch(API_APP + '/api/auth', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({qr_code: data}),
  })
    .then(response => response.json())
    .then(json => {
      if (json.status == 'finish') {
        navigation.replace('index');

        Alert.alert('Pemberitahuan', json.msg);
        // setVisible(false);
        return false;
        // ScanAgain.reactivate();
      } else if (json.status == 'start') {
        navigation.replace('index');

        Alert.alert('Pemberitahuan', json.msg);
        // setVisible(false);
        return false;

        // ScanAgain.reactivate();
      } else if (json.status == 'success') {
        // setVisible(false);
        saveData({key: 'user', data: json.user});
        getHasil().then(data => {
          console.log(data.data);
          saveData({key: 'hasil', data: data.data});
        });

        fetch(API_APP + '/api/kandidat')
          .then(kandidat => kandidat.json())
          .then(kandidatJson => {
            saveData({key: 'kandidat', data: kandidatJson});
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                saveData({key: 'location', data: location});
              })
              .catch(error => {
                Alert.alert(
                  'Pemberitahuan',
                  'Telepon tidak terhubung ke internet',
                );
              });
          });
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'KETOSIN'}],
          }),
        );
        return false;
      } else {
        navigation.replace('index');
        // setVisible(false);
        navigation.replace('index');

        Alert.alert('Pemberitahuan', json.msg);
        return false;
      }
    })
    .catch(error => {
      //   ScanAgain.reactivate();
      Alert.alert('Pemberitahuan', 'Telepon tidak terhubung ke internet');
      navigation.replace('index');
    });
}
