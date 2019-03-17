var React = require("react");

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Menu} from "./Menu.jsx";
import Rates from "./Rates";
import Converter from "./Converter";

import {connect} from 'react-redux';

class App extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (<Router>
                <div>
                    <Menu />
                        <Route exact path="/" component={Converter} />
                        <Route path="/rates" component={Rates} />
                </div>
            </Router>);
    }
    
}

const mapStateToProps = function(state) {
    return {
        rates: state.get('rates')
    };
}


export default connect(mapStateToProps)(App);

