console.log("I am from upper outside");

// const request = fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// console.log(request, 'request');

// const something = request.then((response) => {
//     console.log('successfull');
//     console.log(response, 'res')
//     return response.json()
// })

// something.then((data) => {
//     console.log(data, 'data');
// })

// request.catch((error) => console.log(error.message, 'errorMeesage'))

// fetch(`https://jsonplaceasasholder.typicode.com/todos/1`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error.message, 'errorMessage'))

// async-await
const fetchTodo = async () => {
    try {
        const res = await fetch(`https://jsonplaceasasholder.typicode.com/todos/1`);
        const data = await res.json();
        console.log(data, 'data');
    } catch (error) {
         console.log(error.message, 'errorMessage')
    }
}

fetchTodo()


setTimeout(function () {
    console.log("I am from setTimeout");
}, 0);
setTimeout(function () {
    console.log("I am from setTimeout 2");
}, 0);




console.log('I am from lower outside');
