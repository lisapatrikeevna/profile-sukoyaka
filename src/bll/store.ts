import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from './userSlice'
import globalReducer from './globalSlice'
import {authReducer} from "./authReducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['global']
};

const reducers = combineReducers({
  user: userReducer,
  global: globalReducer,
  auth:authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default (() => {
  let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  let persistor = persistStore(store);
  return { store, persistor };
})();
 export type RootStateType = ReturnType<typeof reducers>
