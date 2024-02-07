import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickname: "",
  },
  reducers: {
    updateNickname(state, action) {
      const { data } = action.payload;
      state.nickname = data;
    },
  },
});

export const { updateNickname } = userSlice.actions;
export const userReducer = userSlice.reducer;