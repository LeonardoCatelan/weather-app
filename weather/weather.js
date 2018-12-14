const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/277cb5fd656426eccee8f4994fc359a3/${latitude},${longitude}`,
        json:true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: Math.ceil((body.currently.temperature-32) / 1.8),
                apparentTemperature: Math.ceil((body.currently.apparentTemperature -32) / 1.8)
            });
        }else{
            callback('Unable to fetch weather');
        }
    })
    
}




module.exports.getWeather = getWeather