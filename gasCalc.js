var gasPriceCalc = require('./getGasPrice.js');
const fs = require("fs");
var gasPrices = gasPriceCalc;
let fileName = "gasPrice.json";
let data = JSON.parse(fs.readFileSync(fileName));

console.log(data);
console.log(data.fuelPrices.regular);
gasPrices = data.fuelPrices.regular;

var milesToGo = 1000;
var mpg = 30;

var gasMoney = milesToGo/mpg;
gasMoney = gasPrices * gasMoney;
console.log('gas Price: ' + gasPrices);
module.exports = {
	findGasCost: function (milesToGo, mpg) {
		console.log('findGasCost: ' + milesToGo + ' ' + mpg);
		console.log('gas Price: ' + gasPrices);
		var gasMoney = milesToGo/mpg;
		gasMoney = gasPrices * gasMoney;
		console.log('Gas Money: ' + gasMoney);
		return gasMoney.toString();
		
	}
};

