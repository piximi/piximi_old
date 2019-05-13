import logger from 'redux-logger'
import {
  persistReducer,
  persistStore
} from 'redux-persist'
import thunk from 'redux-thunk'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import localforage from "localforage"

import {
  AnyAction,
  configureStore,
  EnhancedStore,
  Middleware,
  StoreEnhancer
} from "redux-starter-kit";

import {
  reducer
} from "./reducers";

const enhancers: StoreEnhancer[] = [];

const middleware: Middleware<{}, any>[] = [
  logger,
  thunk
];

const preloadedState = {};

localforage.config({
  driver: localforage.INDEXEDDB,
  storeName: 'cyto'
});

const persistConfig = {
  key: 'root',
  storage: localforage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const options = {
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer,
};

export const store: EnhancedStore<any, AnyAction> = configureStore(options);

export const persistor = persistStore(store);
