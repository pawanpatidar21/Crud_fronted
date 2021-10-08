

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "../components/Reducers/reducers";

const store = createStore(appReducer, applyMiddleware(thunk))

export default store