import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {AppReducer} from "../components/reducer/UserInfoReducer";
import {RepoReducer} from "../components/reducer/RepoReducer";

const rootReducer = combineReducers({
    userReducer: AppReducer,
    repoReducer: RepoReducer
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export type RootReducerType = ReturnType<typeof rootReducer>
export type RootStateType = ReturnType< typeof store.getState>
export type AppDispatchType = typeof store.dispatch

// // @ts-ignore
// store=store.getState()