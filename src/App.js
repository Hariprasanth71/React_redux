import React from 'react'
import HeaderNav from './Header';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './Safecontainer/features/Reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
  }
})

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <HeaderNav />
      </Provider>
    </div>
  )
}
