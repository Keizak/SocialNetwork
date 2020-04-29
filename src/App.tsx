import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Nav";
import Profile from "./components/Content";


function App()
{
    return (
        <div className="app-wraper">
           <Header />
           <NavBar />
           <Profile />

        </div>
    )
};


export default App;
