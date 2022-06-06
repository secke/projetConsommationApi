////////Function pour modifier un utilisateur/////

// var profil = sessionStorage.getItem('profil')
// console.log(profil)
// if (profil===lamine){
    
// }

function modifuser(id,valeur, cle){
    id=String(id)
    let url="http://127.0.0.1:5000/api_groupe_7/users/"+id
    new_dict = {}
    new_dict[`${cle}`] = valeur
let promise = fetch(url, {
    method: "PUT", 
    headers: {
    "Content-Type": 'application/json'
    },
    
    body: JSON.stringify(
        new_dict
    )
});
}

function savechange(elem,id){
elem.addEventListener("change",function (){
    var valeur=elem.value
    var cle=elem.getAttribute('class')
     modifuser(id,valeur,cle)
     elem.setAttribute("readonly","true")
})
}

var id;

/////////////////Function supprimer attribut readOnly///

function supreadonly(elem){
elem.addEventListener('dblclick', function () {
        elem.removeAttribute('readonly')
    })
    savechange(elem,id)


}


////////// Fonction pour creer un input


function createinput(div2,val){
var tab = [ 'name','username','email','address']
for (i in tab){
    var td=document.createElement("td")
    var ntd=div2.appendChild(td)
    var div4 = ntd.appendChild(document.createElement('input'))
    div4.setAttribute('readonly',"true")
    supreadonly(div4,val.id)
    var j=tab[i]
    if (j=="address"){
        div4.value =val[j]['phone'];
        div4.setAttribute("class",'phone')
        
    }
    else{
        div4.value =val[j]
        div4.setAttribute("class",j)
    }

}


}

// ######### Fonction permettant d'editer les lignes ##########

function editline(bouton,id){
bouton.addEventListener('change',function () {
    var tr=bouton.parentNode
    var td=tr.childNodes;
   for (i=0;i<=3;i++){
       var input=td[i].querySelector("input")
           input.removeAttribute("readonly")
           input.style.backgroundColor = 'white'
           savechange(input,id)
       

   }
    
})
}

function data_form(line) {
inp[0].value= line.name
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
}

function donnees_json() {
var resp = {
    "name":inp[0].value,
    "username":inp[1].value,
    "email":inp[2].value,
    
    "street":inp[3].value,
    "suite":inp[4].value,
    "city":inp[5].value,
    "zipcode":inp[6].value,
    
    "lat":inp[7].value,
    "lng":inp[8].value,
    
    "phone":inp[9].value,
    "website":inp[10].value,
    
    "companyName":inp[11].value,
    "catchPhrase":inp[12].value,
    "companyBs":inp[13].value
    
} 
return resp
}

var a = 'name'
function createbutton(div2,clas,text,line) {
var td= document.createElement("td")
var div5 = div2.appendChild(td).appendChild(document.createElement('button'))
div5.classList = clas
div5.innerText= text
var form=document.querySelector('form')
var elem=document.querySelector('table')
inp=form.querySelectorAll('.input_adduser')
div5.addEventListener('click', (e)=>{
    e.preventDefault()
    form.style.display = "block"
    elem.style.display = "none"
    data_form(line)
    
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        var id = String(line.id)
        url = "http://127.0.0.1:5000/api_groupe_7/users/"+id
        var resp = donnees_json()
        console.log(resp)
        const option = {
            method : 'PUT',
            headers: {"Content-Type" : "application/json"},
            mode: 'cors',
            body : JSON.stringify(resp)
        }
        // class Put {
        //     async put(url, resp) {
        //         const reponse = await fetch(url, option)
        //     }
        // }
        // var http = new Put;
        // http.put(url,resp)

        fetch(url, option)
        .then(reponse=>reponse.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

        form.style.display = "none"
        elem.style.display = "block"

    })

})
return div5
}

// ############## Fonction de creation et d'ajout des lignes du tableau ##############


function CreateElement( line ) {
var cretr = document.createElement('tr')
var tbody=document.querySelector('#content').appendChild(cretr)
createinput(cretr,line)
var td= cretr.appendChild(document.createElement("td"))
cretr.classList = 'col'
var checkbox=document.createElement("INPUT")
checkbox.setAttribute("type","checkbox")
checkbox.setAttribute("class","editline")
var td=td.appendChild(checkbox)
// tbody.appendChild(td)
editline(checkbox,line.id)
createbutton(cretr, "btn_update", "Update",line)
createbutton(cretr, "btn_del", "Del")



}

const btn_ajout = document.querySelector('.btn_ajout');


// ############### Methode GET affichage et scrolling des users ###############



fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 

return res.json()
}).then(function(data){ 
// console.log(data.users[0]);
connect_post(data.users[1])
for (var i = 0; i<=9; i++) {
    CreateElement(data.users[i])
}
// document.body.scrollTop = 0
window.addEventListener('scroll', (e) => {
    console.log(data.length)
    if (i>=10) {
        e.preventDefault()
        // i += 1
        // btn_scroll.style.display = "none"
    } else {
        CreateElement(data.users[i])
        
    }
    i += 1
    var btn = document.querySelector(".btn_update")
    console.log(btn)
})
})


// ############# Methode POST des users ###################

var elem=document.querySelector('table')

// const btn_ajout = document.querySelector('.btn_ajout');

console.log(btn_ajout)

function connect_post(line){
btn_ajout.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(btn_ajout)
    sessionStorage.setItem('userId', line.id)
    sessionStorage.setItem('name',line.name )
    window.location.replace('user.html')
})
}

// btn_ajout.addEventListener('click', (e)=>{
//     e.preventDefault()
//     console.log('hello')
//     form.style.display = "block"
//     elem.style.display = "none"

//     // console.log(resp)
//     submit.addEventListener('click', (e)=>{
//         e.preventDefault()
//         resp = donnees_json()
//         console.log(resp)
//         var url = `http://127.0.0.1:5000/api_groupe_7/users`
//         const option = {
//             method : 'POST',
//             headers: {"Content-Type" : "application/json"},
//             mode: 'cors',
//             body : JSON.stringify(resp)
//         }
//         fetch(url, option)
//             .then(reponse=>reponse.json())
//             .then(data=>console.log(data))
//             .catch(err=>console.log(err))

//         form.style.display = "none"
//         elem.style.display = "block"
//     })
// })



// var submit = document.querySelector('.btn_submit')
// console.log(btn_ajout)
// var inp = document.querySelectorAll('.input_adduser')
// var form = document.querySelector(".form_adduser")
// // // var btn = document.querySelector(".btn_update")
// // console.log(btn)
// // btn.addEventListener('click', (e)=>{
// //     e.preventDefault()
// //     form.style.display = "block"
// //     elem.style.display = "none"

// // })


