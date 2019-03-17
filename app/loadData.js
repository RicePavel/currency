
import * as $ from 'jquery';
import {store} from './reducer.jsx';

function loadData() {
    const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
    $.getJSON(apiUrl, (response) => {
        store.dispatch({
            type: 'LOAD_OK',
            data: response
        });
    });
}

export default loadData;

