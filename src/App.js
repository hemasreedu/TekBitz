import logo from './logo.svg';
import './App.css';
import React from "react";
import Menu from "./Components/Menu";
//import JSqstns from "./Components/JSqstns";
//import Reactqstns from "./Components/Reactqstns";
import Home  from "./Components/Home";
import Suspense from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
const LazyJSqstns = React.lazy(() => import("./Components/JSqstns"))
const LazyReactqstns = React.lazy(() => import("./Components/Reactqstns"))

export default function App() {
    return (
        <HashRouter>
            <div className="App">
                <Menu />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Javascriptquestions">
                        <React.Suspense>
                            <LazyJSqstns />
                        </React.Suspense>
                    </Route>
                    <Route path="/Reactquestions">
                        <React.Suspense>
                            <LazyReactqstns />
                        </React.Suspense>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
  );
}


