import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './slice/role';

const store = configureStore({
  reducer: {
    role: roleReducer,
     
  },
});

export default store;
