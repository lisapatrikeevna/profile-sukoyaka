import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    userName: '',
    token: '',
    avatar: '',
    recordId: '',
    arData: undefined,
    notificationNo: 0,
    notifications: undefined,
    coins: 0,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setRecordId: (state, action) => {
      state.recordId = action.payload;
    },
    setArData: (state, action) => {
      state.arData = action.payload;
    },
    setIconByTime:(state, action)=>{
      state.perTime = action.payload;
    },
    setNotificationNo:(state, action)=>{
      state.notificationNo = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCoins: (state, action) => {
      state.coins = action.payload;
    }
  }
});

export const {
  setUserId,
  setUserName,
  setToken,
  setAvatar,
  setRecordId,
  setArData,
  setIconByTime,
  setNotificationNo,
  setNotifications,
  setCoins,
} = userSlice.actions;

export default userSlice.reducer;
