import React from "react";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import { Item } from "./Item/Item";

type RepoItemsPropsType = {
    repoCount: number
    repoList: InitialRepoType
}

export const RepoItems = ({repoCount, repoList}: RepoItemsPropsType) => {
    return <>
        <p>Repositories ({repoCount})</p>
        {repoList.map(el =>  <Item key={el.id}
                                  id={el.id}
                                  description={el.description}
                                  url={el.html_url}
                                  name={el.name}/>)}
    </>
}