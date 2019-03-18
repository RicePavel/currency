
function convert(price1, price2, value1) {
    var value2 = (price1/price2)*value1;
    value2 = (value2).toFixed(2);
    return value2;
}

export default convert;