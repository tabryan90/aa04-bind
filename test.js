// Your code here
const Employee = require('./employee')

let johnWick = new Employee("John Wick","Dog Lover")

let boundJohn = johnWick.sayName.bind(johnWick)

setTimeout(boundJohn,2000)

johnWick.sayName()

let occ = johnWick.sayOccupation.bind(johnWick)

setTimeout(occ,3000)
