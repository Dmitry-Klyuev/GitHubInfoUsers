import React from 'react'
import style from './Item.module.scss'


type ItemPropsType = {
    id: number | undefined
    description: string | undefined
    url: string | undefined
    name: string | undefined
}

export const Item = ({id, description, url, name}: ItemPropsType) => {
    return(
        <div className={style.itemContainer}>
            <div className={style.itemContent}>
                <a href={url} target="_blank">{name}</a>
                <span>{description}</span>
            </div>

        </div>
    )
}