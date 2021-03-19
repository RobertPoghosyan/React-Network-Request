import React from 'react';
import {Route, Switch} from "react-router-dom";

import Homepage from "containers/Homepage/Homepage";
import Posts from "containers/Posts/Posts";
import PostDetails from 'containers/PostDetails/PostDetails';
import Todos from "containers/Todos/Todos";
import Auth from 'containers/Auth/Auth';
import Profile from 'containers/Profile/Profile';
import Error from 'components/Errors/Error';
import TodosDetails from 'containers/TodosDetails/TodosDetails';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/" component = {Homepage} />
                <Route exact path = "/posts" component = {Posts} />
                <Route exact path = "/posts/:postId" component = {PostDetails} />
                <Route exact path = "/todos" component = {Todos} />
                <Route exact path = "/todos/:todoId" component = {TodosDetails} />
                <Route exact path = "/auth" component = {Auth} />
                <Route exact path = "/profile" component = {Profile} />
                <Route path = "*" component = {Error} />
            </Switch> 
        </div>
    )
}

export default AppRoutes;

//<Route exact path = "/todos" component = {Todos} />

