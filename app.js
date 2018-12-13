const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}) 
.help()
.alias('help', 'h')
.argv;

const addressInput = encodeURIComponent(argv.a);
console.log(addressInput);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=XenCxMaTYWNp2tUNaDeyMJdMBie4637W&location=${addressInput}`,
    json: true
}, (error, response, body) => {
    //  console.log(JSON.stringify(body, undefined, 2));




    console.log(`Adress: ${body.results[0].providedLocation.location}`);
    console.log('----');
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});