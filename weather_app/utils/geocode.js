const request = require('request')

const GEO_TOKEN = 'pk.eyJ1IjoiYW5kcmV3LWNvb3BlciIsImEiOiJja2pnN2FxenQ4dzZsMnlsYnk2NWEzbmR6In0.mF9WVPA7OFP57Kv6qftT3w';

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=${GEO_TOKEN}&limit=1`
    request({url: url, json: true}, (err, {body}) => {
        if (err) {
            callback('Failed to call external geocode service.')
        } else if (!body.features || body.features.length === 0) {
            callback('Got empty result. Try another search.')
        } else {
            const data = body.features[0];
            callback(undefined, {
                latitude: data.center[0],
                longitude: data.center[1],
                place_name: data.place_name
            })
        }
    })
}

module.exports = {
    geocode: geocode
}