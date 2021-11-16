import React from 'react';
import {Helmet} from 'react-helmet'
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <title>Comics</title>
                <meta name="description" content="Marvel application" />
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    );
};

export default ComicsPage;