import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  nickname: string;
}

const initialState: ProfileState = {
  nickname: 'defaultNickname',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

export const { updateNickname } = profileSlice.actions;

export default profileSlice.reducer;