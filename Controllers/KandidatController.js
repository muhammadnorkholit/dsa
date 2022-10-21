import {Alert} from 'react-native';
import {API_APP} from '../environment';

export function showKandidat(navigation) {
  return fetch(API_APP + '/api/kandidat')
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      Alert.alert('Pemberitahuan', 'Telepon tidak terhubung ke internet', [
        {
          text: 'Cancel',
          onPress: () => {
            return navigation.goBack();
          },
        },
        {
          text: 'Refresh',
          onPress: () => {
            return navigation.replace('Kandidat');
          },
        },
      ]);
      return false;
    });
}
export function showKandidatDetail(id, navigation) {
  return fetch(API_APP + '/api/kandidat/' + id)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log('dsa');
      Alert.alert('Pemberitahuan', 'Telepon tidak terhubung ke internet', [
        {
          text: 'Cancel',
          onPress: () => {
            return navigation.goBack();
          },
        },
        {
          text: 'Refresh',
          onPress: () => {
            return navigation.replace('Kandidat');
          },
        },
      ]);
      return false;
    });
}
