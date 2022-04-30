/**
 * @fileoverview store 
 */
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";
import createSageMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSageMiddleware();

const middlewares: any[] = [thunk, sagaMiddleware];

// only allows logger in development mode 
if (process.env.NODE_ENV === "development") {
  middlewares.push(reduxLogger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
