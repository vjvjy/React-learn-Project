import React, { Component } from 'react';  
import { Register }  from './Register';
import  UserList from './UserList';  
import { Route, Switch,Router } from 'react-router-dom';

import {history} from './history';

class App extends Component { 
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/user/:id">
            <Register />
          </Route>
          <Route path="/userList" exact >
            <UserList />
          </Route>
          </Switch>
      </Router>
    );
  }  
}
export default App;  