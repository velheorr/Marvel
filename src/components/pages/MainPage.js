import React, {useState} from 'react';
import {Helmet} from 'react-helmet'
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../CharSearchForm/CharSearchForm";

const MainPage = () => {
    const [selectedChar, setChar] = useState(null)
    const onCharSelected = id =>{setChar(id)}

    return (
        <>
            <Helmet>
                <title>Main page</title>
                <meta name="description" content="Marvel application" />
            </Helmet>
            <ErrorBoundary><RandomChar/></ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary><CharInfo charId={selectedChar}/></ErrorBoundary>
                    <ErrorBoundary><CharSearchForm/></ErrorBoundary>
                </div>
            </div>
        </>
    );
};

export default MainPage;