import React from "react";
import ReactPaginate from "react-paginate";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../../../store/store";
import {InitialRepoType} from "../../../reducer/RepoReducer";
import {Item} from "./Item/Item";


export const RepoItems = () => {
    const repoList = useSelector<rootReducerType, InitialRepoType>(state => state.repoReducer);
    const handlePageClick = () => {

    }

    return (
        <>
            {repoList.map(el =>  <Item key={el.id}
                                       id={el.id}
                                       description={el.description}
                                       url={el.html_url}
                                       name={el.name}/>)}
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={20}
                    previousLabel="< previous"
                />
            </div>
        </>
    );
};
