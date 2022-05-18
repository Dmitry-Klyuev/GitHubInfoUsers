import React from "react";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../../store/store";
import {defaultStateType} from "../../reducer/UserInfoReducer";
import style from './user.module.scss';
import followers from './img/followers.png';
import following from './img/following.png';
import {RepoItem} from "./Repo_item/RepoItem";
import {useNavigate} from "react-router-dom";

export const User = () => {
    const user = useSelector<RootReducerType, defaultStateType["user"]>(state => state.userReducer.user);
    const navigate = useNavigate();
    if (!user.name) {
        navigate('../404');
    }
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.name}>
                    <div className={style.photo}>
                        <img src={user?.avatar_url} alt=""/>
                        <p>{user?.name}</p>
                    </div>
                    <a href={user.html_url} target="_blank" rel="noreferrer">{user?.login}</a>
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
                    <div className={style.repo_content}>
                        <RepoItem/>
                    </div>
                </div>
            </div>


        </div>
    );
};