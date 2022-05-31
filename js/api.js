
console.log('On demare le projet consommation api')
tab = []

fetch('http://127.0.0.1:5001//api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    console.log(data.users);
    return data.users

})

// console.log('hgjjghjggjgh',users)
// users.then(function(resp) {
//     console.log("ammmm",resp.json())
// })
