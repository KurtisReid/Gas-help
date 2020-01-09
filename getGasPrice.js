const http = require('https');
const xml2js = require('xml2js');
const fs = require('fs');
var gasCost = 0;
const parser = new xml2js.Parser({ attrkey: "ATTR" });
//converts xml to JSONfind
module.exports = {
function getMe()
{
let req = http.get("https://www.fueleconomy.gov/ws/rest/fuelprices", function(res) {
    let data = '';
    res.on('data', function(stream) {
        data += stream;
    });
    res.on('end', function(){

        parser.parseString(data, function(error, result) {
		
            if(error === null) {
				let info = JSON.stringify(result);
				fs.writeFileSync('gasPrice.json', info);
                console.log(parseFloat(result.fuelPrices.regular));
				gasCost = parseFloat(result.fuelPrices.regular);
            }
            else {
                console.log(error);
            }
        });
    });
});
return gasCost;
}
