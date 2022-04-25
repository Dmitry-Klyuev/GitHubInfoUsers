import React from "react";
import style from './InstalUser.module.scss'
import search from './search.png'
import union from './Union.png'
import {NavLink} from "react-router-dom";


export const InstalUser = () => {

    return (
        <div className={style.container}>
            first page
            <button onClick={()=>{<NavLink to={'/user'}>fffff</NavLink>}}>ckick</button>

            {/*{usersStatus ? <img src={search} alt="search"/> : <img src={union} alt="union"/>}*/}
            {/*{usersStatus ? <h1>Start with searching a GitHub user</h1> : <h1>User not found</h1>  }*/}
        </div>
    );
};