import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import localforage from 'localforage';
import {
  configureStore,
  EnhancedStore,
  Middleware,
  StoreEnhancer
} from '@reduxjs/toolkit';
import { combinedReducers } from '..';

const enhancers: Array<StoreEnhancer> = [];

const middleware: Array<Middleware> = [logger, thunk];

const preloadedState = {};

const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: 'piximi'
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const options = {
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer
};

export const store: EnhancedStore = configureStore(options);

export const persistor = persistStore(store);
