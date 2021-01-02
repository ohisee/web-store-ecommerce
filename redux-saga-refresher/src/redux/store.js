/**
 * @file store 
 */
import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { incrementSagaTake, incrementSageTakeEvery } from "./app.saga";

const sagaMiddleware = createSageMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(incrementSagaTake);
sagaMiddleware.run(incrementSageTakeEvery);

export default store;
