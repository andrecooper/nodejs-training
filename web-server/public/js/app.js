console.log("Loaded client side js file")

const formElement = document.querySelector('form');
const searchElement = document.querySelector('input')

const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchValue = searchElement.value;

    message1.textContent = 'loading...'
    message2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${searchValue}`).then(response => {
        console.log(response)
        response.json().then(data => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = `Temperature in ${data.place} is ${data.temperature} degrees`
                message2.textContent = `Weather description: ${data.description[0]}`
            }
        })
    })
})