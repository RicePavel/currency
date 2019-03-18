
import * as $ from 'jquery';
import {store} from './reducer.jsx';

function loadData(rates, uploadDate) {
    const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
    var date = new Date();
    var nowDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    if (uploadDate !== nowDate || !rates) {
        return $.getJSON(apiUrl, (response) => {
            store.dispatch({
                type: 'LOAD_OK',
                data: response
            });
        });
    }
}

export default loadData;

