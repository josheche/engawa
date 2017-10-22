// VISA API
var request = require('request');

var config = require('./visa-config/configuration.json');
var VisaAPIClient = require('./libs/visaapiclient.js');
var stores = require('./visa-data/stores.json');
var req = request.defaults();
var userId = config.userId ;
var password = config.password;
var keyFile = config.key;
var certificateFile = config.cert;
//----------------



var lat = "34.047616";// example lat
var lng = "-118.239079";// example lng

getMerchantLocator(lat,lng);
    //res.render('index.ejs', {stores: stores});


function getMerchantLocator(lat,lng) {

    var visaAPIClient = new VisaAPIClient();
    var strDate = new Date().toISOString().replace(/Z/, '');
    var locatorRequest = JSON.stringify({
        "header": {
            "messageDateTime": strDate,
            "requestMessageId": "VCO_GMR_001"
        },
        "searchAttrList": {
            "merchantName": "ALOHA CAFE",
            /* ----
               Change merchantName filter to merchantCategoryCode filter to get all
               the stores related to gardening
               ----
            "merchantCategoryCode": ["0780","0763","5193","5200","5411","5561","5992"],
            },*/
            "merchantCountryCode": "840",
            "latitude": lat,
            "longitude": lng,
            "distance": "100",
            "distanceUnit": "M"
        },
        "responseAttrList": [
            "GNLOCATOR"
        ],
        "searchOptions": {
            "maxRecords": "2",
            "matchIndicators": "true",
            "matchScore": "true"
        }
    });

    var baseUri = 'merchantlocator/';
    var resourcePath = 'v1/locator';
    visaAPIClient.doMutualAuthRequest(baseUri + resourcePath, locatorRequest, 'POST', {}, function(err, responseCode, body) {
        if(!err) {
            console.log("Response: "+responseCode);
            console.log(body);
        } else {
            console.log("ERROR");
        }
    });


}
