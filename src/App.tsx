import React from 'react';
import './App.scss';
import {Search} from "./components/header/Search";
import {InstalUser} from "./components/content/instalUser/InstalUser";
import logo from './components/header/logo.png'
import {User} from "./components/content/users/User";

function App() {
    return (
        <div className={'container'}>
            <div className={'header'}>
                <img src={logo} alt="logo"/>
                <Search/>
            </div>
            <div className={'content'}>
                {/*<InstalUser/>*/}
                <User/>
            </div>
        </div>
    );
}

export default App;
