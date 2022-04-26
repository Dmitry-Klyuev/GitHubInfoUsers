import React from "react";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../../store/store";
import {InitialRepoType, setRepoTC} from "../../../reducer/RepoReducer";
import {Item} from "./Item/Item";
import style from './repoIte,.module.scss'


export const RepoItems = () => {
    const repoList = useSelector<rootReducerType, InitialRepoType>(state => state.repoReducer);
    const publicRepos = useSelector<rootReducerType, number | undefined>(state => state.userReducer.user.public_repos)
    const userlogin = useSelector<rootReducerType, string| undefined>(state => state.userReducer.user.login)
    const dispatch = useDispatch()

    const pageCount = publicRepos ? Math.ceil(publicRepos/4) : 0

    const handlePageClick = (event: any) => {
        console.log(userlogin);
        const numberPage = ++event.selected
        // @ts-ignore
        dispatch(setRepoTC(userlogin, numberPage))
    }

    return (
        <>
            {repoList.map(el =>  <Item key={el.id}
                                       id={el.id}
                                       description={el.description}
                                       url={el.html_url}
                                       name={el.name}/>)}
            <div className={style.container}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    className={style.paginator}
                />
            </div>
        </>
    );
};
