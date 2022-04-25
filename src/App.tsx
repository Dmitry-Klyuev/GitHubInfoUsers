import React from 'react';
import './App.scss';
import logo from './components/header/logo.png';
import {Search} from "./components/header/Search";
import {Route, Routes} from "react-router-dom";
import {InstalUser} from "./components/content/instalUser/InstalUser";
import {User} from "./components/content/users/User";

function App() {
    return (

        <div className={'container'}>

            <div className={'header'}>
                <img src={logo} alt="logo"/>
                <Search/>
            </div>
            {/*<div className={'content'}>*/}
                <Routes>
                    <Route path={'/'} element={<InstalUser/>}/>
                    <Route path={`user/*`} element={<User/>}/>
                </Routes>
            {/*</div>*/}
        </div>

    )
        ;
}

export default App;
