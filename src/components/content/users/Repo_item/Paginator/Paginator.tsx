import style from "../repoIte,.module.scss";
import ReactPaginate from "react-paginate";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setRepoTC} from "../../../../reducer/RepoReducer";
import {useParams} from "react-router-dom";
import {RootStateType} from "../../../../../store/store";

type PaginationPropsType = {
    repoCount: number
}

export const Paginator = ({repoCount}:PaginationPropsType) => {
    const userName = useSelector<RootStateType, string | undefined>(state => state.userReducer.user.name)
    const dispatch = useDispatch()
    const handlePageClick = (event: { selected: number; }) => {
        let number = (event.selected += 1);
        // @ts-ignore
        dispatch(setRepoTC(userName,number))
    }

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={Math.ceil(repoCount / 4)}
                previousLabel="<"
                className={style.paginator}
                initialPage={1}
            />
        </div>
    )
}