import React from "react";
import style from './InstalUser.module.scss';
import search from './search.png';


export const InstalUser = () => {

    return (
        <div className={style.container}>
            <div className={style.blockWrapper}>
                <img src={search} alt="search"/>
                <h1>Start with searching
                    a GitHub user</h1>
            </div>
        </div>
    );
};