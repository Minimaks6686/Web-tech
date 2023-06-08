import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import TestPage from './Pages/TestPage';
import HomePage from './Pages/HomePage';

export const useRoutes = () => {
    return (
    <Switch>
        <Route path="/test">
        <TestPage />
        </Route>
        <Route path="/home">
        <HomePage />
        </Route>
        <Redirect to="/home"/>
    </Switch>
    );
};
  