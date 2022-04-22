import React, {ChangeEvent, useState} from "react";
import style from './search.module.scss'


export const Search = () => {
    const [searchValue, setSearchValue] = useState('')


    const searchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    return(
        <div className={style.headerInput}>
            <input type="text"
                   placeholder={'Enter GitHub username'}
                   value={searchValue}
                   onChange={searchInputValue}
            />
        </div>
    )
}