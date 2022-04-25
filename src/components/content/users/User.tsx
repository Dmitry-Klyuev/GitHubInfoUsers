import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../store/store";
import {defaultStateType} from "../../reducer/UseInfoReducer";
import style from './user.module.scss';
import followers from './img/followers.png';
import following from './img/following.png';
import {RepoItems} from "./Repo_item/RepoItem";

export const User = () => {
    const user = useSelector<rootReducerType, defaultStateType["user"]>(state => state.userReducer.user);

    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.name}>
                    <div className={style.photo}>
                        <img src={user?.avatar_url} alt=""/>
                       <p>{user?.name}</p>
                    </div>
                    <a href={user?.html_url} target="_blank">{user?.login}</a>
                    <div className={style.social}>
                        <p><img src={followers} alt="followers"/>
                            {user?.followers} followers
                        </p>
                        <p>
                            <img src={following} alt="following"/>
                            {user?.following} following
                        </p>
                    </div>
                </div>
                <div className={style.repo}>
                    <p>Repositories ({user?.public_repos})</p>
                    <div className={style.repo_content}>
                        <RepoItems/>
                    </div>
                </div>
            </div>


        </div>
    );
};