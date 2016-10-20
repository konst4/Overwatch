/**
 * Created by konstantin on 9/24/16.
 */
// tutorial1.js
import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/Layout";
import {Router, Route, IndexRoute, hashHistory} from "react-router"



const app = document.getElementById('app');
ReactDOM.render(
    <Layout/>,app
);
Router.run(Route, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.getElementById('app'));
});
