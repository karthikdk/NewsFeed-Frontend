import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import App from './App';
import '../src/css/style.css'
const store=configureStore()
store.subscribe(()=>{
  console.log('state changed',store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}> 
      <App/>
    </Provider>
  </BrowserRouter>
);

