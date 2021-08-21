import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main'
import Repository from './pages/Repository'
import Error from './pages/Error'

export default function Routes(){
    return(
        <BrowserRouter>
               <Switch>
                   <Route exact path="/" component={Main}></Route>
                   <Route path="/repository/:repository" component={Repository}></Route>

                   <Route path="*" component={Error}></Route>
               </Switch>
        </BrowserRouter>
    )
}