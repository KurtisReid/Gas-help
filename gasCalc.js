var gasPrices = 3.20;
//var milesToGo = 1000;
//var mpg = 30;

module.exports = {
	findGasCost: function (milesToGo, mpg) {
		var gasMoney = milesToGo/mpg;
		gasMoney = gasPrices * gasMoney;
		return gasMoney.toString();
	}
};

