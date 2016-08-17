import api from 'lib/api';

  api.new('http://parent-teacher-connection.herokuapp.com/api/api-token-auth/');


export function login(username, password) {
  api.login(username, password)
    .then(function(resp){
      console.log(resp)
    });
}

export function getUser() {
  api.get('/user').then(function(resp){
    console.log(resp);
  })
}

export function logout() {
  api.logout();
}