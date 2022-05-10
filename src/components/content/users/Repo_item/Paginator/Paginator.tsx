import ReactPaginate from "react-paginate";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setRepoTC} from "../../../../reducer/RepoReducer";
import {RootStateType} from "../../../../../store/store";
import style from './paginator.module.scss'


type PaginationPropsType = {
    repoCount: number
}

export const Paginator = ({repoCount}:PaginationPropsType) => {
    const userName = useSelector<RootStateType, string | undefined>(state => state.userReducer.user.login)
    const [firstRepo, setFirstRepo] = useState(1)
    const amountRepoOnPage = 4
    const dispatch = useDispatch()
    const handlePageClick = (event: { selected: number; }) => {
        let number = (event.selected += 1);
        setFirstRepo(amountRepoOnPage * number - 3)
        // @ts-ignore
        dispatch(setRepoTC(userName,number))
    }

    return (
        <div className={style.container}>
            <div className={style.countRepos}>
                {firstRepo} - {firstRepo + 3 > repoCount? repoCount: firstRepo + 3} of {repoCount}</div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={Math.ceil(repoCount / 4)}
                previousLabel="<"
                className={style.paginator}
                initialPage={0}
                containerClassName={style.paginator}
                activeLinkClassName={style.active}
            />
        </div>
    )
}