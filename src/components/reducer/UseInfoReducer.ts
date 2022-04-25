import {Dispatch} from "redux";
import {GetUserApi} from "../../api/api";


export type defaultStateType = {
    loading: boolean
    user: {
        avatar_url: string | undefined,
        name: string | undefined,
        html_url: string | undefined,
        login: string | undefined,
        followers: number | undefined,
        following: number | undefined,
        public_repos: number | undefined,
    }
}

const defaultState = {
        loading: false,
        user: {
            avatar_url: undefined,
            name: undefined,
            html_url: undefined,
            login: undefined,
            followers: undefined,
            following: undefined,
            public_repos: undefined,
        },
    }
;

type RootActionType = SetUserType

export let AppReducer = (state: defaultStateType = defaultState, action: RootActionType): defaultStateType => {
    switch (action.type) {
        case "SET_USER": {
            return {...state, user: {...action.payload}};
        }
        default: {
            return state;
        }
    }
};

export const setUserAC = (payload: {
                              avatar_url: string | undefined,
                              name: string | undefined,
                              html_url: string | undefined,
                              login: string | undefined,
                              followers: number | undefined,
                              following: number | undefined,
                              public_repos: number | undefined,
                          },
) => {
    return {type: 'SET_USER', payload} as const;
};


export type SetUserType = ReturnType<typeof setUserAC>

//thunk
export const setUserTC = (user: string) => (dispatch: Dispatch) => {
    GetUserApi.getUsers(user)
        .then((res) => {
            const payload = {
                avatar_url: res.data.avatar_url,
                name: res.data.name,
                html_url: res.data.html_url,
                login: res.data.login,
                followers: res.data.followers,
                following: res.data.following,
                public_repos: res.data.public_repos,
            };
            dispatch(setUserAC(payload));
        });

};


