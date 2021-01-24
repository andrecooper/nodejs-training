const request = require('request')

const WEATHER_TOKEN = 'd94337559fbd9e8519c199748b5aeadf';

const getWeather = (long, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${WEATHER_TOKEN}&query=${long},${lat}`
    request({url: url, json: true}, (err, {body}) => {
            if (err) {
                callback('Failed to call external weather service.')
            } else if (body.error) {
                callback(`Got invalid result. ${body.error.info} `)
            } else {
                const data = body.current;
                console.log(data)
                callback(undefined, {
                    temperature: data.temperature,
                    feelslike: data.feelslike,
                    description: data.weather_descriptions
                })
            }
        }
    )
}

module.exports = {
    getWeather : getWeather
}
