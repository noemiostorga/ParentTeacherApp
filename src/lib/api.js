import axios from 'axios';
import Cookie from 'js-cookie';

// 'api-token-auth':"Authorization: Token ${token}";
var instance = axios.create();

instance.new = function (url) {
  this.defaults.baseURL = url;
  // this.defaults.headers = {'Content-Type' : 'application/x-www-form-urlencoded'};
};

instance.setTokenPath = function (path = '/authtoken') {
  this.tokenPath = path;
}

instance.getTokenPath = function () {
  return this.tokenPath || '/authtoken';
}

if (Cookie.get('token')) {
  var token = Cookie.get('token');
  instance.interceptors.request.use(function(config){
    config.headers['Authorization'] = 'Token ' + token;
    return config;
  });
}

instance.login = function(user, pass) {
  return this.post(this.getTokenPath(), {username: user, password:pass})
    .then(function(resp){
      var token = resp.data.token;

      console.log('here it is ',resp);

      Cookie.set('token', token);
      this.interceptors.request.use(function(config){
        config.headers['Authorization'] = 'Token ' + token;
        return config;
      })
    }.bind(this))
};

instance.logout = function() {
  Cookie.remove('token');
}

export default instance;