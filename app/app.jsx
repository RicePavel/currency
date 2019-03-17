var ReactDOM = require("react-dom");
var React = require("react");

import {Menu} from "./components/Menu.jsx";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


import App from "./components/App.jsx";

import {connect} from 'react-redux';
import {reducer, store} from './reducer.jsx';
import {Provider} from 'react-redux';


ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById("app")
        )



