import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TestPage from './Pages/TestPage';
import HomePage from './Pages/HomePage';
import DisciplinesPage from './Pages/DisciplinesPage';
import FeedbackPage from './Pages/FeedbackPage';
import ContactPage from './Pages/ContactPage';

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/test">
                <TestPage />
            </Route>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/disciplines">
                <DisciplinesPage />
            </Route>
            <Route path="/feedback">
                <FeedbackPage />
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Redirect to="/home" />
        </Switch>
    );
};
