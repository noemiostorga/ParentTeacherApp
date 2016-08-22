import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';



import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Layout

import Form from 'layout/form.js';
import Home from 'layout/home.js';
// UI


const Site = (
  
    <Router history={hashHistory}>
        <Route path="/" component={Form}/>
        <Route path="/home" component={Home}/>
    </Router>
 
);

render(Site, document.getElementById('app'));