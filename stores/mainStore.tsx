import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import {articleReducer} from './reducers';

const newsConfig = {
  key: 'article',
  storage: AsyncStorage,
  blacklist: ['news'],
  whitelist: ['saved'],
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  article: persistReducer(
    newsConfig,
    articleReducer,
  ),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
