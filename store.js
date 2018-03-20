import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./src/reducers";

const middleware = applyMiddleware(promise(), thunk, Logger());

export default createStore(reducer, middleware);