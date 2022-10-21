import {API_APP} from '../environment';

export const getHasil = () => {
  return fetch(API_APP + '/api/result')
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => alert(err));
};
