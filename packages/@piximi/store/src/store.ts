import logger from 'redux-logger'
import {
  persistReducer,
  persistStore
} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
  key: 'root',
  storage
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
