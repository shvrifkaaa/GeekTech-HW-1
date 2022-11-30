let login = document.querySelector('.Login')
let password = document.querySelector('.Password')

login = prompt('input login')
password = prompt('password')

let authUser = [
    {
        login: login,
        password : password
    }
]
let users =[
    {
        userLogin: 'Sharif',
        userPass: '12345'
    },
    {
        userLogin: 'Nargiz',
        userPass: '54321'
    },
]

if (authUser[0].login === users[0].userLogin && authUser[0].password === users[0].userPass ||
    authUser[0].login === users[1].userLogin && authUser[0].password === users[1].userPass) {
    alert('success auth')
} else {
    alert('error in login or pass')
}