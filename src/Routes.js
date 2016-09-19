import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="courses" component={CoursesPage}/>
    </Route>
);