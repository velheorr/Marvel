import React, {lazy, Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import decoration from '../../resources/img/vision.png';
import {MainPage, ComicsPage, SingleComicPage} from '../pages'
import Spinner from "../spinner/Spinner";

const Page404 = lazy(()=> import('../pages/404'))

const App = () =>  {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route exact="true" path="/" element={<MainPage/>} />
                            <Route exact="true" path="/comics" element={<ComicsPage/>} />
                            <Route exact="true" path="/comics/:comicId" element={<SingleComicPage/>} />
                            <Route exact="true" path="*" element={<Page404/>} />
                        </Routes>
                    </Suspense>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        </Router>
    )
}

export default App;