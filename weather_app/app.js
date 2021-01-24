const chalk = require('chalk')
const geo = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location_arg = process.argv.splice(2);

if (!location_arg || location_arg.length === 0) {
    return console.log(`${chalk.red.bold('[ERROR]')} missed argument location`)
}

const location = location_arg[0];
geo.geocode(location, (err, {longitude, latitude, place_name} = {}) => {
    if (err) {
        return console.log(chalk.red.bold(err))
    }

    forecast.getWeather(longitude, latitude, (err, {temperature, feelslike} = {}) => {
        if (err) {
            return console.log(chalk.red.bold(err))
        }
        console.log(`${chalk.greenBright.inverse.bold('Current weather in ' + place_name + ':')}`)
        console.log(`It is ${temperature} degrees in ${location}. Actually it feels like ${feelslike}.`)
    })
})
