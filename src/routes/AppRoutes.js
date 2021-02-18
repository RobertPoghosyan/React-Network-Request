import React from 'react';
import {Route, Switch} from "react-router-dom";

import Posts from "containers/Posts/Posts";
import Homepage from "containers/Homepage/Homepage";
import Todos from "containers/Todos/Todos";
import PostDetails from 'containers/PostDetails/PostDetails';
import Error from 'components/Errors/Error';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/" component = {Homepage} />
                <Route exact path = "/posts" component = {Posts} />
                <Route exact path = "/posts/:postId" component = {PostDetails} />
                <Route exact path = "/todos" component = {Todos} />
                <Route path = "*" component = {Error} />
            </Switch> 
        </div>
    )
}

export default AppRoutes;
