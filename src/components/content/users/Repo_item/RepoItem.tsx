import React from "react";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../../store/store";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import {Item} from "./Item/Item";


export const RepoItems = () => {
    const repoList = useSelector<rootReducerType, InitialRepoType>(state => state.repoReducer);


    return (
        <>
            {repoList?.map(el => {
                debugger
                return <Item key={el.id} id={el.id} description={el.description} url={el.html_url} name={el.name}/>;
            })}
        </>
    );
};
