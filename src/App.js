import React from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//pages
import Home from './pages/home';
import Opportunities from './pages/opportunities';
import Documents from './pages/documents';
import Picture from './pages/picture';
//axios

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
         <Route exact path = "/" render={() => (
           <Home />
         )}>
         </Route>
         <Route path = "/opportunity-dashboard/:id" render={() => (
           <Opportunities />
         )}>
         </Route>
         <Route path = "/documents" render={() => (
           <Documents />
         )}>
         </Route><Route path = "/picture" render={() => (
           <Picture />
         )}>
         </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
