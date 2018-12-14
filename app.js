const request = require ('request');
const yargs = require ('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        // alias = 'address',
        describe: 'Address you wanna fetch the weather',
        string: true
    }
})
.   help()
.alias('help', 'h')
.argv;

const addressInput = encodeURIComponent(argv.a);


request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=XenCxMaTYWNp2tUNaDeyMJdMBie4637W&location=${addressInput}`,
    json:true
}, (error, response, body) => {
      if(error){
         console.log('Unable to connect to map quest servers');
      }else if(body.results[0].locations[0].adminArea5) {
        console.log(`Address:   ${body.results[0].providedLocation.location}`);
        console.log(`Latitude:  ${body.results[0].locations[0].latLng.lat}`);
        console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`); 
      }else{
        console.log('Unable to find the address');
      }
    

})