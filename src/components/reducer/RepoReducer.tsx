import {Dispatch} from "redux";
import {GetRepositoriesApi, RootObject} from "../../api/api";
import {setLoaderAC} from "./UserInfoReducer";

export type InitialRepoType = RootObject[]

export const initialRepo = []

export const RepoReducer = (state: InitialRepoType = initialRepo, action: SetUserRepoType): InitialRepoType => {
    switch (action.type){
        case "SET_USER_REPOS":{
            return [...action.payload]
        }
        default:{
            return state
        }
    }
}

export const setUserReposAC = (payload: Array<RootObject>) => {
    return {type: 'SET_USER_REPOS', payload} as const;
};

export type SetUserRepoType = ReturnType<typeof setUserReposAC>

//thunk
export const setRepoTC = (payload: {user: string, pageNumber: number}) => (dispatch: Dispatch, getState: any) => {
    dispatch(setLoaderAC())
    GetRepositoriesApi.gerRepos(payload.user, payload.pageNumber)
        .then((res) => {
            debugger
            // @ts-ignore
            dispatch(setUserReposAC(res.data));
            dispatch(setLoaderAC())
        });
};