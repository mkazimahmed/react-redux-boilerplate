import $http from 'axios';
import config from '../config/config.json';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(userId) {
  // fetchUser is an ActionCreator, it needs to return an object with a type property
  const url = `${config.apiUrl}/v2/users/${userId}`;
  return {
    type: FETCH_USER,
    payload: $http.get(url),
  };
}
