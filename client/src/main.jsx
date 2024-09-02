import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import PostReducer from './reducers/postSlice.js';
import AuthReducer from './reducers/authSlice.js';
import { StrictMode } from 'react';

export const store = configureStore({
  reducer : {
    posts : PostReducer,
    users : AuthReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>,
)
