import {applyMiddleware, combineReducers, createStore} from "redux";
import {UsersReducer} from "./usersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users: UsersReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))


export type rootReducerType = ReturnType<typeof rootReducer>

// // @ts-ignore
// store=store.getState()