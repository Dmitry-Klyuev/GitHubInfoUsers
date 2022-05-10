import React from "react";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../../../store/store";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import { Paginator } from "./Paginator/Paginator";
import {EmptyList} from "./EmptyRepo/EmptyList";
import { RepoItems } from "./RepoItems";


export const RepoItem = () => {
    const repoList = useSelector<RootReducerType, InitialRepoType>(state => state.repoReducer);
    const repoCount = useSelector<RootReducerType, number>(state => state.userReducer.user.public_repos)
    return (
        <>
            {repoList.length > 0 ? <RepoItems repoList={repoList} repoCount={repoCount}/> : <EmptyList/>
            }
            {repoList.length > 0 && <Paginator repoCount={repoCount}/>}
        </>
    );
};
