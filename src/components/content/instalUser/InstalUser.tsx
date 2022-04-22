import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../store/store";
import style from './InstalUser.module.scss'
import search from './search.png'
import union from './Union.png'


export const InstalUser = () => {
    const usersStatus = useSelector<rootReducerType, boolean>(state => state.users.status)

    return (
        <div className={style.container}>
            {usersStatus ? <img src={search} alt="search"/> : <img src={union} alt="union"/>}
            {usersStatus ? <h1>Start with searching a GitHub user</h1> : <h1>User not found</h1>  }
        </div>
    );
};