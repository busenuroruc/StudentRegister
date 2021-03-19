import React, {Component} from 'react';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAI-Hk0qmRoXKvcNLjxApZu2cIuLL17OGA',
      authDomain: 'ogrencikayit-b88aa.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-b88aa.firebaseio.com',
      projectId: 'ogrencikayit-b88aa',
      storageBucket: 'ogrencikayit-b88aa.appspot.com',
      messagingSenderId: '922608043947',
      appId: '1:922608043947:web:a3cd3c750a425b65a934ee',
      measurementId: 'G-MS5D7QE74J'
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default Main;
