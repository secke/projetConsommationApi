
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

var a = 'name'
function createbutton(div2,clas,text,line) {
    var div5 = div2.appendChild(document.createElement('button'))
    div5.classList = clas
    div5.innerText= text
    div5.addEventListener('click', (e)=>{
        e.preventDefault()
        form.style.display = "block"
        elem.style.display = "none"
        inp[0].value= line.name
        console.log(inp)
        inp[1].value = line.username
        inp[2].value = line.email
        inp[3].value = line.address.street
        inp[4].value = line.address.suite
        inp[5].value = line.address.city
        inp[6].value = line.address.zipcode
        inp[7].value = line.address.geo.lat
        inp[8].value = line.address.geo.long
        inp[9].value = line.address.phone
        inp[10].value = line.address.websit
        inp[11].value = line.company.name
        inp[12].value = line.company.catchPhrase
        inp[13].value = line.company.bs
        j=0
        // for(i in line){
        //     inp[j].value=line[i]
        //     j++
        // }
        
        // for (elem of inp){
        //     console.log(key)
        // }
        // console.log(form)
        
        submit.addEventListener('click', ()=>{
            
        })

    })
    return div5
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
    createbutton(div2, "btn_update", "Update",line)
    createbutton(div2, "btn_del", "Del")
    return div2

}


// const progressbar = document.querySelector('.scrollbar');

// let totalheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    console.log(data.users[0]);
    for (var i = 0; i<=4; i++) {
        CreateElement(data.users[i])
    }
    
    // document.body.scrollTop = 0
    window.addEventListener('click', (e) => {
        
        if (i>=10) {
            e.preventDefault()
            // i += 1
        } else {
            CreateElement(data.users[i])
            
        }
        i += 1
        var btn = document.querySelector(".btn_update")
        console.log(btn)
    })
    // i += 1

    
    return data.users

})
var submit = document.querySelector('.btn_submit')
// console.log(submit)
var inp = document.querySelectorAll('.input_adduser')
var form = document.querySelector(".form_adduser")
// // var btn = document.querySelector(".btn_update")
// console.log(btn)
// btn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     form.style.display = "block"
//     elem.style.display = "none"
    
// })


