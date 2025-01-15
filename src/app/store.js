// src/store.js

import { configureStore } from '@reduxjs/toolkit';

// Create a store without any specific reducers (you can add your reducers later)
const store = configureStore({
  reducer: {
    // Add your reducers here later, for now, it's empty
  },
});

export default store;
