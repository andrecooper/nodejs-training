const name = "Andrew"
const userAge = 34

const user = {
    name: name,
    age: userAge,
    location: 'Kyiv'
}

const user2 = {
    name: name,
    age: userAge,
    location: 'Kyiv'
}

console.log(user)
console.log(user2)

const product = {
    label: 'Notebook',
    color: 'Red',
    price: 23,
    isAvailable: true

}

// const label = product.label
// const price = product.price

const {label: productLabel, price, rating = 3.4} = product

console.log(`${productLabel} with ${rating} costs ${price}`)

const transaction = (type, {label: productLabel, price}) => {
    console.log(`${productLabel} costs ${price}`)
}


transaction('order', product)