import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const configureStore = () => {
	const middleware = applyMiddleware(thunk);
	const store = createStore(reducer, middleware);
	return store;
};

export default configureStore;
