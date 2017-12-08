import React from 'react';
import ReactDOM from 'react-dom';
import {App, MainPage} from './App';
import Create from './create';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={MainPage} />
            <Route path='create(/:id)' component={Create} />
        </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
