import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./../pages/counter/counterSlice";
import { reducer as profileReducer } from "./../pages/profile/profileSlice";

const store = configureStore({
  reducer: {
    counterData: counterReducer,
    profileData: profileReducer,
  },
});

export default store;
