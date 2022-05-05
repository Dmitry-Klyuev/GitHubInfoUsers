import React from "react";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../../../store/store";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import {Item} from "./Item/Item";
import { Paginator } from "./Paginator/Paginator";
import style from './repoIte,.module.scss'


export const RepoItems = () => {
    const repoList = useSelector<RootReducerType, InitialRepoType>(state => state.repoReducer);
    const repoCount = useSelector<RootReducerType, number>(state => state.userReducer.user.public_repos)
    return (
        <>
            {repoList.map(el =>  <Item key={el.id}
                                       id={el.id}
                                       description={el.description}
                                       url={el.html_url}
                                       name={el.name}/>)}
            <div>
                {/*доделать*/}
                {/*{publicRepos &&  `${firstNumber} - ${firstNumber + 3} of ${publicRepos}` }*/}

            </div>
            <div className={style.container}>
                <Paginator repoCount={repoCount}/>
            </div>
        </>
    );
};
