// Fetch API requires a discussion of callbacks, Promises, Thenables and Async/Await

// Promises => states: Pending, Fulfilled, Rejected
const myPromise = new Promise((resolve, reject) => {
    const error = false
    if (!error) {
        resolve("Yes! resolved the promise")
    } else {
        reject("Failed to resolve the promise")
    }
})

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("My Next Promise resolved!")
    }, 3000)
})

myNextPromise.then(value => {
    console.log(value)
})

myPromise.then(value => {
    return value + " Out"
})
.then(newValue => {
    console.log(newValue)
})
.catch(error => {
    console.error(error)
})

// Fetch API
const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(user => {
            console.log(user)
        })
    })


// Async/Await
const myUsers = {
    userList: []
}

const myAsyncFunc = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json()
    const userEmailArray = jsonUserData.map(user => {
        return user.email
    })
}

const anotherAsyncFunc = async () => {
    const data = await myAsyncFunc()
    myUsers.userList = data
}

anotherAsyncFunc()

const getData = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })

    // const response = await fetch(URL, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: {}
    // })
    const data = await response.json()
    console.log(data)
}

getData()
