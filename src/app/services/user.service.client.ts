import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient {




  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByCredentials(username, password) {
    return fetch( 'http://localhost:3000/findUserByCredentials/' + username + '/username/' + password + '/password')
      .then(function (response) {
        if (response.status > 400) {
          return null;
        }
        return response.json();
      });
  }

  profile() {
    return fetch('http://localhost:3000/api/profile', {
      credentials: 'include'
    })
      .then(response => response.json());
  }




  updateProfile(user) {
    console.log(user);
    return fetch('http://localhost:3000/api/updateProfile', {
      credentials: 'include',
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch('http://localhost:3000/api/updateProfile/' + username + '/username')
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
    return fetch('http://localhost:3000/api/register/', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('http://localhost:3000/api/logout/', {
      method: 'post',
      credentials: 'include'
    });
  }


}
