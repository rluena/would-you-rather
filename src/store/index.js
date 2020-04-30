import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import rootReducer from "../reducers";

const isDev = process.env.NODE_ENV !== "production";

const enhancers = isDev
  ? composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        immutableStateInvariantMiddleware(),
        loggerMiddleware
      )
    )
  : compose(applyMiddleware(thunkMiddleware));

export default createStore(rootReducer, enhancers);
