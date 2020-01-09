const http = require('https');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

let req = http.get("https://www.fueleconomy.gov/ws/rest/fuelprices", function(res) {
    let data = '';
    res.on('data', function(stream) {
        data += stream;
    });
    res.on('end', function(){
        parser.parseString(data, function(error, result) {
            if(error === null) {
                console.log(result);
            }
            else {
                console.log(error);
            }
        });
    });
});