const request = require('request');

var geocodeAddress = (address, callback) => {
    var addressInput = encodeURIComponent(address);

    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=XenCxMaTYWNp2tUNaDeyMJdMBie4637W&location=${addressInput}`,
        json:true
    }, (error, response, body) => {
          if(error){
              callback('Unable to connect to map quest servers');
             
          }else if(body.results[0].locations[0].adminArea5) {
            callback(undefined, {
                address: `${body.results[0].locations[0].street} ${body.results[0].locations[0].adminArea5}`,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            }) 
          }else{
            callback('Unable to find the address');
          }
        
            
    })
}

module.exports.geocodeAddress = geocodeAddress;