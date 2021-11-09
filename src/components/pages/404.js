import React from 'react';
import {Link} from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
    const styles = [
        {'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'},
        {'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop':'30px', 'color': '#9f0013'}
    ]


    return (
        <div>
            <ErrorMessage/>
            <p style={styles[0]}>Page doesn't exist</p>
            <Link style={styles[1]} to='/'>Back to main page</Link>
        </div>
    );
};

export default Page404;
