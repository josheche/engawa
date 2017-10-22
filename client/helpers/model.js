var plantdata = (function() {
    var plants = [
    {
       "CommonName": "Ageratum",
       "ScientificName": "Ageratum houstonianum",
       "HumidityLow": 40,
       "HumidityHigh": 90,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 18,
       "TempHigh": 26,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "ageratum.jpg"
     },
     {
       "CommonName": "American Merigold",
       "ScientificName": "Tagetes erecta",
       "HumidityLow": 30,
       "HumidityHigh": 55,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 19,
       "TempHigh": 27,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "americanmerigold.png"
     },
     {
       "CommonName": "Blue Sage",
       "ScientificName": "Salvia farinacea",
       "HumidityLow": 50,
       "HumidityHigh": 90,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 20,
       "TempHigh": 28,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "bluesage.jpg"
     },
     {
       "CommonName": "Japanese Blood Grass",
       "ScientificName": "Imperata",
       "HumidityLow": 40,
       "HumidityHigh": 60,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 16,
       "TempHigh": 24,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "japanesebloodgrass.jpg"
     },
     {
       "CommonName": "Lavender",
       "ScientificName": "Lavendula angustifolia",
       "HumidityLow": 60,
       "HumidityHigh": 70,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 15,
       "TempHigh": 23,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "lavender.jpg"
     },
     {
       "CommonName": "Sunflower",
       "ScientificName": "Helianthus annuus",
       "HumidityLow": 30,
       "HumidityHigh": 60,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 20,
       "TempHigh": 28,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "sunflower.jpg"
     },
     {
       "CommonName": "Spearmint",
       "ScientificName": "Mentha spicata",
       "HumidityLow": 40,
       "HumidityHigh": 90,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 20,
       "TempHigh": 28,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "spearmint.jpeg"
     },
     {
       "CommonName": "Oregano",
       "ScientificName": "Origanum vulgare",
       "HumidityLow": 30,
       "HumidityHigh": 60,
       "UVLow": 2,
       "UVHigh": 10,
       "TempLow": 23,
       "TempHigh": 28,
       "PressureLow": 98.2053,
       "PressureHigh": 104.978,
       "HoursOfSunlight": 10,
       "Image": "oregano.jpg"
     }];

    var allNames = function(plantList) {
        if(plantList === null) {
            plantList = plants;
        }
        var allNames = [];
        for(var i = 0; i < plantList.length; i++) {
            allNames.push(plantList[i].CommonName);
        }
        return allNames;
    };

    var humidityRange = function(targetHumidity, plantList) {
        if(plantList === null) {
            plantList = plants;
        }
        var obj2 = [];
        if(targetHumidity === null) {
            targetHumidity = 0;
        }
        for(var i = 0; i < plantList.length; i++) {
            if(plantList[i].HumidityLow <= targetHumidity && plantList[i].HumidityHigh >= targetHumidity) {
                obj2.push(plantList[i]);
            }
        }
        return obj2;
    };

    var tempRange = function(targetTemp, plantList) {
        if(plantList === null) {
            plantList = plants;
        }
        var obj2 = [];
        if(targetTemp === null) {
            targetTemp = 0;
        }
        for(var i = 0; i < plantList.length; i++) {
            if(plantList[i].TempLow <= targetTemp && plantList[i].TempHigh >= targetTemp) {
                obj2.push(plantList[i]);
            }
        }
        return obj2;
    };

    var findPlant = function(name) {
        for(var i = 0; i < plants.length; i++) {
            if(plants[i].CommonName == name) {
                return i;
            }
        }
        return -1;
    }

    var plantTempHigh = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].TempHigh;
    }

    var plantTempLow = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].TempLow;
    }

    var plantHumidityHigh = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].HumidityHigh;
    }

    var plantHumidityLow = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].HumidityLow;
    }

    var plantScientificName = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].ScientificName;
    }

    var plantUVHigh = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].UVHigh;
    }

    var plantUVLow = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].UVLow;
    }

    var plantPressureHigh = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].PressureHigh;
    }

    var plantPressureLow = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].PressureLow;
    }

    var plantSunHours = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].HoursOfSunlight;
    }

    var getData = function() {
        return plants;
    }

    var pressureRange = function(targetPressure, plantList) {
        if(plantList === null) {
            plantList = plants;
        }
        var obj2 = [];
        if(targetPressure === null) {
            targetPressure = 0;
        }
        for(var i = 0; i < plantList.length; i++) {
            if(plantList[i].PressureLow <= targetPressure && plantList[i].PressureHigh >= targetPressure) {
                obj2.push(plantList[i]);
            }
        }
        return obj2;
    };

    var getImage = function(plant) {
        var index = findPlant(plant);
        if(index === -1) {
            return -1;
        }
        return plants[index].Image;
    }

    return {
        allNames : allNames,
        humidityRange : humidityRange,
        tempRange : tempRange,
        plantTempHigh : plantTempHigh,
        plantTempLow : plantTempLow,
        plantHumidityHigh : plantHumidityHigh,
        plantHumidityLow : plantHumidityLow,
        plantScientificName : plantScientificName,
        plantUVHigh : plantUVHigh,
        plantUVLow : plantUVLow,
        plantPressureLow : plantPressureLow,
        plantPressureHigh : plantPressureHigh,
        plantSunHours : plantSunHours,
        getData : getData,
        pressureRange : pressureRange,
        getImage : getImage
    }
})();

exports.plantFunctions = plantdata;

// exports.plantRequest = function() {
//   var request = require('request');
//   var headers = {
//      'accept': 'text/plain'
//   };
//
//   var options = {
//      url: 'http://192.168.69.125:8080/data/temp',
//      headers: headers
//   };
//
//   var stats = []; //temp, humid, uv, press
//   var plants;
//     request(options, function (error, response, body) {
//         stats = [];
//         stats.push(parseInt(body.substr(1, body.length - 1)));
//         if(stats[0] <= 15) {stats[0] = 20;}
//         request('http://192.168.69.125:8080/data/humid', function (error, response, body) {
//             stats.push(parseInt(body.substr(1, body.length - 1)));
//             request('http://192.168.69.125:8080/data/uv', function (error, response, body) {
//                 stats.push(parseInt(body.substr(1, body.length - 1)));
//                 request('http://192.168.69.125:8080/data/press', function (error, response, body) {
//                     stats.push(parseInt(body.substr(1, body.length - 1)) / 1000);
//                     console.log(stats);
//                     plants = plantdata.pressureRange(stats[3], plantdata.humidityRange(stats[1], plantdata.tempRange(stats[0], null)));
//                     var plantsRev = [];
//                     for(var i = 0; i < plants.length; i++) {
//                         plantsRev.push({"Name":plants[i].CommonName,"Image":plants[i].Image});
//                     }
//                     console.log(plantsRev);
//                     return {plantsRev : [stats]};
//                 });
//             });
//         });
//     });
// };
