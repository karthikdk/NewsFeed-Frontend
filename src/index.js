import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'

import App from './App';
import '../src/css/style.css'
import configStore from './store/configStore';

const store=configStore()
console.log(store.getState())


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

