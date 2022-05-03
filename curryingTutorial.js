// currying
let multiply = function(x,y) {
    console.log(x * y)
}

let multiplybyTwo = multiply.bind(this,2)     //or let multiplybyTwo = multiply.bind(this,2,3)   
multiplybyTwo(5)

let multiplybyThree = multiply.bind(this,3)
multiplybyThree(8)

// another way of currying using fn closures
let Multiply = function(x) {
    return function (y) {
        console.log(x * y);
    }
}


let MultiplybyTwo = Multiply(2)     //or let multiplybyTwo1 = multiply.bind(this,2,3)   
MultiplybyTwo(8)

let MultiplybyThree = Multiply(3)
MultiplybyThree(10)