import {createStore, combineReducers, applyMiddleware} from "redux";
import employeesReducer from "./employees";
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";


let reducers = combineReducers({
    employees: employeesReducer,
});


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
