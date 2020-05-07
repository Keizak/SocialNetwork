import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialoge";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wraper">
                <Header/>
                <NavBar/>
                <div className="app-wraper-content">
                    <Route path="/Dialogs" component={Dialogs}/>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>


</div>
        </BrowserRouter>
)
};


export default App;
