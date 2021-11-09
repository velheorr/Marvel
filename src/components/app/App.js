import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import decoration from '../../resources/img/vision.png';
import {MainPage, ComicsPage} from '../pages'


const App = () =>  {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<MainPage/>} />
                        <Route exact path="/comics" element={<ComicsPage/>} />
                        <Route exact path="*" element={<ComicsPage/>} />
                    </Routes>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        </Router>
    )
}

export default App;