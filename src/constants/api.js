import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export const apiLinkedIn = axios.create({
  baseURL: 'https://api.linkedin.com/v2'
}, {
     method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          // 'Authorization': key,
          withCredentials: true,
          mode: 'no-cors',
        }
    }
);

export const apiGithab = axios.create({
  baseURL: 'https://api.github.com',
})

export const headers = {
  // 'Authorization': `Bearer ${accessToken}`,
  'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type':'application/x-www-form-urlencoded'
}