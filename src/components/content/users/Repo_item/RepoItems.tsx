import React from "react";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import {Item} from "./Item/Item";
import style from './RepoItems.module.scss';

type RepoItemsPropsType = {
    repoCount: number
    repoList: InitialRepoType
}

export const RepoItems = ({repoCount, repoList}: RepoItemsPropsType) => {
    return <div className={style.reposWrapper}>
        <span>Repositories ({repoCount})</span>
        <div className={style.repoItems}>
            {repoList.map(el => <Item key={el.id}
                                      id={el.id}
                                      description={el.description}
                                      url={el.html_url}
                                      name={el.name}/>)}
        </div>
    </div>;
};