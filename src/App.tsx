import React, {useEffect} from 'react';
import './App.scss';
import logo from './components/header/logo.png';
import {Search} from "./components/header/Search";
import {Route, Routes, useNavigate} from "react-router-dom";
import {InstalUser} from "./components/content/instalUser/InstalUser";
import {User} from "./components/content/users/User";
import {useSelector} from "react-redux";
import {RootReducerType} from "./store/store";
import {ErrorUser} from "./components/content/error/ErrorUser";


function App() {
    const loader = useSelector<RootReducerType, boolean>(state => state.userReducer.loading);
    const navigate = useNavigate();

    useEffect(()=>{
        <InstalUser/>
    },[])

    const logoHandler = () => {
     navigate( '/')
    }


    return (
        <div className={'container'}>
            <div className={loader ? 'loader' : undefined}>
            </div>
            <div className={'header'}>
                <img src={logo} alt="logo" onClick={logoHandler}/>
                <Search/>
            </div>
            <Routes>
                <Route path={'*'} element={<InstalUser/>}/>
                <Route path={`user/*`} element={<User/>}/>
                <Route path={'404'} element={<ErrorUser/>}/>
            </Routes>
        </div>
    );
}

export default App;
