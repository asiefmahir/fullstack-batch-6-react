"use strict"

// this kew-word

// function add(a, b) {
//     return a + b
// }

// add() // this ===


/**
 * 1) Independent Call 
 * 2) It can be method
 * 3) Event Listener
 * 4) Arrow function
 */

// function summ () {
//     console.log(this);
// }


const person = {
    fisrtName: "Mahir",
    lastName: "Asief",
    birthYear: 1997,
    calculateAge: function () { // this === person
        // function summ () {
        //     console.log(this);
        // }

        // summ()
        // console.log(this);
        const printName = () => {
            console.log(this)
        }

        printName()
    }
}
person.calculateAge()

// function add (a , b) {
//     return a + b
// }

// add()

// call-stack

// let something = 10;
// var something2 = 100;

function division (num1) {
    // console.log(this.something);
    let num2 = 10;

    const res = multiply(num1, num2);

    return res / 5

    
}


function multiply (num3, num6) {
    const result = add(num3, num6);

    return result * 10
}

function add (num4, num5) {
    return num4 + num5
}


// division(2)


// function call -> execution context
// Stack = Last in First Out


// Call-stack -->



let a = 'hey';

function first () {
    let b = 'hello';
    console.log(b);

    function second () {
        let c = 'Hi';
        console.log(a + b + c);
    }

    second()
    console.log('I am after second');
}

// first()


function first2 () {
    let b = 'hello';
    console.log(b);

    function second2 () {
        let c = 'Hi';
        console.log(a + ' ' + b + ' ' + c);
    }

    return second2

    // second()
}

const innerfunc = first2()
innerfunc();
// console.log(innerfunc)


/**
 * function second2 () { ---> bagPack = first2 V.O // closure
        let c = 'Hi';
        console.log(a + ' ' + b + ' ' + c);
    }
 */





// call-stack -> first() -> e.c -> 