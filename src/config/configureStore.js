import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers";

const configureStore = () => {
	const middleware = applyMiddleware(promise(), thunk);
	const store = createStore(reducer, middleware);
	return store;
};

export default configureStore;
