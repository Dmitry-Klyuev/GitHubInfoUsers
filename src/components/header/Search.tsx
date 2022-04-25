import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import style from './search.module.scss'
import { setUserTC} from "../reducer/UseInfoReducer";
import {useDispatch} from "react-redux";
import {setRepoTC} from "../reducer/RepoReducer";

export const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const searchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: any) => {
        if (event.key === 'Enter'){
            // @ts-ignore
            dispatch(setUserTC(searchValue))
            // @ts-ignore
            dispatch(setRepoTC(searchValue))
            navigate(`/user/${searchValue}`)

        }


    }

    return(
        <div className={style.headerInput}>
            <input type="text"
                   placeholder={'Enter GitHub username'}
                   value={searchValue}
                   onChange={searchInputValue}
                   onKeyPress={onKeyPressHandler}
            />
            {/*<button onClick={()=>{<Navigate to={`/user`}/>}}>click</button>*/}
        </div>
    )
}

function UseDispatch() {
    throw new Error("Function not implemented.");
}
