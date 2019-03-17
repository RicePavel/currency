var React = require("react");

import {Link} from "react-router-dom";
import {store} from "../reducer.jsx";

import styles from "../styles.js";

class Menu extends React.Component {
    
    render() {
        return (
                <div>
                    <Link to="/" >Конвертер</Link>
                    <Link to="rates">Курсы</Link>
                </div>
                );
    }
    
}

export {Menu};