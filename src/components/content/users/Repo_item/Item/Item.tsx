import React from 'react'


type ItemPropsType = {
    id: number | undefined
    description: string | undefined
    url: string | undefined
    name: string | undefined
}

export const Item = ({id, description, url, name}: ItemPropsType) => {
    return(
        <div>
            <h2>{name}</h2>
        </div>
    )
}