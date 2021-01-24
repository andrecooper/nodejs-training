const http = require('http')


const WEATHER_TOKEN = 'd94337559fbd9e8519c199748b5aeadf';
const url = `http://api.weatherstack.com/current?access_key=${WEATHER_TOKEN}&query=Kiev`

const request = http.request(url, (response) => {

    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
});
request.on('error', (error) => {
    console.log('Error occurred: ', error)
})
request.end()