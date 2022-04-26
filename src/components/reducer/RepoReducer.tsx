import {Dispatch} from "redux";
import {GetRepositoriesApi} from "../../api/api";

export type InitialRepoType = Array<RepositoriesType>

export type RepositoriesType = {
    id: number | undefined,
    name: string | undefined,
    html_url: string | undefined,
    description: string | undefined
}

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


export const setUserReposAC = (payload: [{id: number, name: string, html_url: string, description: string }]) => {
    return {type: 'SET_USER_REPOS', payload} as const;
};

export type SetUserRepoType = ReturnType<typeof setUserReposAC>

//thunk
export const setRepoTC = (user: string, pageNumber: number) => (dispatch: Dispatch, getState: any) => {
    GetRepositoriesApi.gerRepos(user, pageNumber)
        .then((res) => {
            // @ts-ignore
            const payload = res.data.map(el => {
                return {id: el.id, name: el.name, html_url: el.html_url, description: el.description};
            });
            dispatch(setUserReposAC(payload));
        });
};