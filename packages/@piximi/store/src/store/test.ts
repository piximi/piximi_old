import {
  configureStore,
  EnhancedStore,
  Middleware,
  StoreEnhancer
} from "@reduxjs/toolkit";
import localforage from "localforage";
import logger from "redux-logger";
import {Persistor, persistReducer, persistStore} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import {reducer} from "../reducer";
import {root} from "../sagas";
import {ClassifierState, Loss, Metric, Optimizer, Project} from "@piximi/types";

const saga = createSagaMiddleware();

const enhancers: Array<StoreEnhancer> = [];

const middleware: Array<Middleware> = [logger, saga, thunk];

const classifier: ClassifierState = {
  compiling: false,
  evaluating: false,
  fitOptions: {
    epochs: 1,
    initialEpoch: 0
  },
  fitting: false,
  generating: false,
  learningRate: 0.01,
  lossFunction: Loss.CategoricalCrossentropy,
  metrics: [Metric.CategoricalAccuracy],
  opening: false,
  optimizationFunction: Optimizer.SGD,
  predicting: false,
  saving: false,
  validationPercentage: 0.2
};

const project: Project = {
  categories: [],
  images: [],
  name: "example"
};

const state = {
  classifier: classifier,
  project: project
};

const preloadedState = {};

const storage = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: "piximi-test"
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const options = {
  devTools: true,
  enhancers: enhancers,
  middleware: middleware,
  preloadedState: preloadedState,
  reducer: persistedReducer
};

export const testStore: EnhancedStore = configureStore(options);

saga.run(root);

export const testPersistor: Persistor = persistStore(testStore);
