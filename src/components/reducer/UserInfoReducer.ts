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
        public_repos: number,
    }
}

const defaultState = {
        loading: false,
        user: {
            avatar_url: '',
            name: '',
            html_url: undefined,
            login: undefined,
            followers: undefined,
            following: undefined,
            public_repos: 0,
        },
    }
;

type RootActionType = SetUserType | SetLoaderType

export let AppReducer = (state: defaultStateType = defaultState, action: RootActionType): defaultStateType => {
    switch (action.type) {
        case "SET_USER": {
            // return {...state, user: {...action.payload}};
            return {...state, user: {avatar_url: action.payload.avatar_url,
                    name: action.payload.name,
                    html_url: action.payload.html_url,
                    login: action.payload.login,
                    followers: action.payload.followers,
                    following: action.payload.following,
                    public_repos: action.payload.public_repos,
                }}
        }
        case "SET_LOADER":{
            return {...state, loading: !state.loading }
        }
        default: {
            return state;
        }
    }
};

export const setUserAC = (payload: {
                              avatar_url: string,
                              name: string,
                              html_url: string,
                              login: string,
                              followers: number,
                              following: number ,
                              public_repos: number,
                          },
) => {
    return {type: 'SET_USER', payload} as const;
};
export const setLoaderAC = () => {
    return {type: "SET_LOADER"} as const
}

export type SetUserType = ReturnType<typeof setUserAC>
export type SetLoaderType = ReturnType<typeof setLoaderAC>

//thunk
export const setUserTC = (user: string) => (dispatch: Dispatch) => {
    dispatch(setLoaderAC())
    GetUserApi.getUsers(user)
        .then((res) => {
            dispatch(setUserAC(res.data))
            dispatch(setLoaderAC())
        });
};


