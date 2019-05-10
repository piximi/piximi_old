import {
  persistReducer,
  persistStore
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import {
  AnyAction,
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  Middleware,
  StoreEnhancer
} from "redux-starter-kit";

import {
  reducer
} from "./reducers";

const enhancers: StoreEnhancer[] = [];

const middleware: Middleware<{}, any>[] = [
  ...getDefaultMiddleware()
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
