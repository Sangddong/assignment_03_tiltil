import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/profile.reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;

