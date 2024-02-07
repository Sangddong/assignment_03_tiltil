import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/reducer/profile.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
