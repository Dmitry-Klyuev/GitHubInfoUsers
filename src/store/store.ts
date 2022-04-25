import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {AppReducer} from "../components/reducer/UseInfoReducer";
import {RepoReducer} from "../components/reducer/RepoReducer";

const rootReducer = combineReducers({
    userReducer: AppReducer,
    repoReducer: RepoReducer
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export type rootReducerType = ReturnType<typeof rootReducer>



// // @ts-ignore
// store=store.getState()