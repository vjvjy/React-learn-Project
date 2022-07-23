import React, { Component } from 'react';  
import { Register }  from './Register';
import  UserList from './UserList';
// import createHistory from 'history/createBrowserHistory';
// import { createHashHistory } from 'history'  

import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import createHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory({forceRefresh:true});


const history = createHistory(); 



// const history = createHistory();   
// const history = createHashHistory();

class App extends Component { 
  constructor(props){
      super(props);
   }

  render() {
    return (
      <Router history={history}>
          <Route path="/">
            <Register />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>
      </Router>
    );
  }  
}
export default App;  