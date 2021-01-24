// const sqrt = function (x) {
//     return x * x;
// }

// const sqrt = (x) => {
//     return x * x
// };

// const sqrt = (x) => x * x;
// console.log(sqrt(32))


const event = {
    name: 'birthday party',
    guestList: ['mike', 'steven', 'adam', 'monika'],
    printGuestList() {
        console.log(`printing guest list for ${this.name}`)
        this.guestList.forEach((guest) => {
            console.log(`${guest} is invited on ${this.name}`)
        })
    }
}

event.printGuestList()