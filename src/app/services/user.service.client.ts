import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient {




  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByCredentials(username, password) {
    return fetch( 'https://webdev-nodejs-madness.herokuapp.com/api/user/'+username+'/username/'+password+'/password')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  profile() {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/profile', {
      credentials: 'include'
    })
      .then(response => response.json());
  }




  updateProfile(user) {
    console.log(user);
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/updateProfile', {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/user/' + username + '/username')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }


  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/register/', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/logout/', {
      method: 'post',
      credentials: 'include'
    });
  }

  findUserById(userId) {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/user/' + userId, {
      credentials: 'include'
    })
      .then(response => response.json());
  }



}
