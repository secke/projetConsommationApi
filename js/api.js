
console.log('On demare le projet consommation api')
tab = []



var elem = document.getElementById('content')

console.log("TEST",elem)

// var obj = {};
// let name = "moussa"
var name,username,email,phone;
var tab = [ `username`, `email`, `phone`]
var line,phone;
console.log(tab)

function CreateElement( line ) {
    var crediv = document.createElement('div')
    crediv.classList = "container"
    var div1 = document.querySelector('#content').appendChild(crediv)
    var div2 = div1.appendChild(document.createElement('div'))
    div2.classList="row row-cols-4"
    var div4 = div2.appendChild(document.createElement('div'))
    div4.classList = "col"
    div4.innerText = line.name
    var div4 = div2.appendChild(document.createElement('div'))
    div4.classList = "col"
    div4.innerText = line.username
    var div4 = div2.appendChild(document.createElement('div'))
    div4.classList = "col"
    div4.innerText = line.email
    var div4 = div2.appendChild(document.createElement('div'))
    div4.classList = "col"
    div4.innerText = line.address.phone
    
    
    return div2

}


const progressbar = document.querySelector('.scrollbar');

let totalheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    console.log(data.users[0]);
    for (var i = 0; i<=4; i++) {
        CreateElement(data.users[i])
    }
    
    document.body.scrollTop = 0
    window.addEventListener('click', (e) => {
        
        console.log(i)
        if (i>=10) {
            e.preventDefault()
            // i += 1
        } else {
            CreateElement(data.users[i])
        }
        i += 1
    })
    // i += 1

    
    return data.users

})

// console.log('hgjjghjggjgh',users)
// users.then(function(resp) {
//     console.log("ammmm",resp.json())
// })
