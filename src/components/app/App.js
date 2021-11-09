import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import decoration from '../../resources/img/vision.png';
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages'


const App = () =>  {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route exact="true" path="/" element={<MainPage/>} />
                        <Route exact="true" path="/comics" element={<ComicsPage/>} />
                        <Route exact="true" path="/comics/:comicId" element={<SingleComicPage/>} />
                        <Route exact="true" path="*" element={<Page404/>} />
                    </Routes>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        </Router>
    )
}

export default App;