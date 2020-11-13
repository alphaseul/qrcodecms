import React from 'react';
import {useLocation} from 'react-router-dom'

function NoPath(){

    let location = useLocation();
    return(
        <h1>no path from <code>{location.pathname}</code></h1>
    )
}
export default NoPath;