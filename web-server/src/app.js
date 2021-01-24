const path = require('path')
const express = require('express')
const hbs = require('hbs')
const chalk = require('chalk')


const geo = require('./utils/geocode')
const forecast = require('./utils/forecast')

let app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicPath))
app.set('views', viewsPath)
app.set('view engine', 'hbs')

hbs.registerPartials(partialsPath)

app.get('', ((req, res) => {
    res.render('index', {
        name: 'Andrew',
        title: 'Home page'
    })
}))

app.get('/about', ((req, res) => {
    res.render('about', {
        name: 'Andrew',
        title: 'About page'
    })
}))

app.get('/help', ((req, res) => {
    res.render('help', {
        name: 'Andrew',
        title: 'Help page'
    })
}))

app.get('/help/*', ((req, res) => {
    res.send('help page not found')
}))

app.get('/weather', ((req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Address param is required'
        })
    }
    const address = req.query.address;
    geo.geocode(address, (error, {longitude, latitude, place_name} = {}) => {
        if (error) {
            console.log(chalk.red(error))
            return res.send({error})
        }

        forecast.getWeather(longitude, latitude, (error, {temperature, feelsLike, description} = {}) => {
            if (error) {
                console.log(chalk.red(error))
                return res.send({error})
            }
            res.send({
                temperature: temperature,
                feelsLike: feelsLike,
                place: place_name,
                description: description
            })
        })
    })
}))

app.get('*', ((req, res) => {
    res.render('404')
}))

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})