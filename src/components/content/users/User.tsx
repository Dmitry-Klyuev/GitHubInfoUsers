import React, {useEffect} from "react";
import {GetUsersApi} from "../../../api/api";


export const User = () => {
    useEffect(()=>{
        GetUsersApi.getUsers()
            .then((res:any)=>{
                console.log(res);
            })
    },[])

    return(
        <>
        user
        </>
    )
}