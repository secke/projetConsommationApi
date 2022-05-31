
/////////////////Function supprimer attribut readOnly///
function supreadonly(elem){
    elem.addEventListener('dblclick', function () {
            elem.removeAttribute('readonly')
        })
    elem.addEventListener("change",function (){
        console.log(elem.value);
    })
    

}


////////// Fonction pour creer un input
function createinput(div2,val){
    var div4 = div2.appendChild(document.createElement('input'))
    div4.classList = "col"
    div4.setAttribute('readonly',"true")
    div4.value = val
    supreadonly(div4)
}

var elem = document.getElementById('content')
var name,username,email,phone;
var tab = [ `username`, `email`, `phone`]
var line,phone;
// console.log(tab)

function CreateElement( line ) {
    var crediv = document.createElement('div')
    crediv.classList = "container1"
    var div1 = document.querySelector('#content').appendChild(crediv)
    var div2 = div1.appendChild(document.createElement('div'))
    div2.classList="row row-cols-4"
    createinput(div2,line.name)
    createinput(div2,line.username)
    createinput(div2,line.email)
    createinput(div2,line.address.phone)
    return div2

}


const progressbar = document.querySelector('.scrollbar');

let totalheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    // console.log(data.users[0]);
    for (var i = 0; i<=4; i++) {
        CreateElement(data.users[i])
    }
    
    document.body.scrollTop = 0
    window.addEventListener('scroll', (e) => {
        
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

