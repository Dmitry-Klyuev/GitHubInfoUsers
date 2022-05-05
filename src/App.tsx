import React from 'react';
import './App.scss';
import logo from './components/header/logo.png';
import {Search} from "./components/header/Search";
import {Route, Routes} from "react-router-dom";
import {InstalUser} from "./components/content/instalUser/InstalUser";
import {User} from "./components/content/users/User";
import {useSelector} from "react-redux";
import {RootReducerType} from "./store/store";

function App() {
    const loader = useSelector<RootReducerType, boolean>(state => state.userReducer.loading)
    return (
        <div className={'container'}>
            <div className={loader ? 'loader' : undefined}>
            </div>
            <div className={'header'}>
                <img src={logo} alt="logo"/>
                <Search/>
            </div>
                <Routes>
                    <Route path={'/'} element={<InstalUser/>}/>
                    <Route path={`user/*`} element={<User/>}/>
                </Routes>
        </div>

    )
        ;
}

export default App;
