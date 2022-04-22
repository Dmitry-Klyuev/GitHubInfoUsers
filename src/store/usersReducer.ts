


type PageStateType = {
    status : boolean
}

const initialState = {
    status: true
}

type UsersReducerType = SetPageStateType

export const UsersReducer = (state: PageStateType = initialState, action: UsersReducerType) => {
    switch (action.type){
        case "SET_PAGE_STATE":{
            return {...state, status : action.status}
        }
        default: {
            return state
        }
    }

}

export const SETPAGESTATEAC = (status: boolean) => {
    return {type: 'SET_PAGE_STATE', status} as const
}

type SetPageStateType = ReturnType<typeof SETPAGESTATEAC>
