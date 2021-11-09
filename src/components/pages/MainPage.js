import React, {useState} from 'react';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

const MainPage = () => {
    const [selectedChar, setChar] = useState(null)
    const onCharSelected = id =>{setChar(id)}

    return (
        <>
            <ErrorBoundary><RandomChar/></ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <ErrorBoundary><CharInfo charId={selectedChar}/></ErrorBoundary>
            </div>
        </>
    );
};

export default MainPage;