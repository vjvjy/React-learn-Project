import React, { Component } from 'react';  
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Register }  from './Register';
import  UserList from './UserList';  
import { Route, Switch,Router } from 'react-router-dom';
import {history} from './history';
import DisplayQuiz from './DisplayQuiz';
import FocusInput from './Components/FocusInput';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import CakeContainer from './Components/CakeContainer';
import UserComponent from './Components/UserComponent';
import BookCricket from './Components/BookCricket';

class App extends Component { 
  render() {
    return (
      <div>
        <BookCricket />
        {/* <DisplayQuiz /> */}
      </div>
    );
  }  
}
export default App;  