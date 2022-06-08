////////Function pour modifier une information  d'un  utilisateur en connaissant son id/////

var Profil = sessionStorage.getItem('profil')
var pass = sessionStorage.getItem('password')
var userTok = sessionStorage.getItem('username')

fetch('http://127.0.0.1:5000/api_groupe_7/login',{
        method : 'POST',
        headers: {"Content-Type" : "application/json"},
        mode: 'cors',
        body : JSON.stringify({
            'Profil':Profil,
            'username': userTok,
            'password' : pass
})}).then(prom => prom.json())
.then(sortie => {
        let tok=sortie.token
        sessionStorage.setItem('token',tok)
})


var token = sessionStorage.getItem('token')

console.log(Profil)
console.log(userTok)
console.log(token)

var boutonDecon=document.querySelector('.btn_deconnect')
boutonDecon.addEventListener('click',()=>{
    sessionStorage.removeItem('token')
    window.location.replace('connexion.html');

})

// var test_btn_update=document.querySelector('.btn_update')
  
// if (Profil==='lamine'){
//     console.log('yes_visiteur')
//     test_btn_update.style.display='none'
//     // let test_btn_update=document.querySelector('.btn_update')
//     // test_btn_update.style.display='none'
// };

function modifuser(id,valeur, cle,token){
        id=String(id)
        token=String(token)
        let url="http://127.0.0.1:5000/api_groupe_7/users/"+id+"?token="+token
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


///////////////////// Fonction pour  Sauvegarder les informations modifiées
function savechange(elem,id){
    elem.addEventListener("change",function (){
        var valeur=elem.value
        var cle=elem.getAttribute('class')
         modifuser(id,valeur,cle,token)
         elem.setAttribute("readonly","true")
         elem.style.backgroundColor="#F5D7FF"
    })
}

var id, val;

/////////////////Function supprimer attribut readOnly///

function supreadonly(elem, id){
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
        var tr=bouton.parentNode.parentNode
        var td=tr.childNodes;
        console.log(td);
       for (i=0;i<=3;i++){
           var input=td[i].querySelector("input")
               input.removeAttribute("readonly")
               input.style.backgroundColor = 'white'
               savechange(input,id)
           

       }
        
    })
}


///////////////////// Recuperer les informations dans les inputs
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


// /////////////////// Fonction pour recuperer les posts
function Update(e){
    e.preventDefault();
    var id = String(line.id)
    url = "http://127.0.0.1:5000/api_groupe_7/users/"+id
    var resp = {
        "name":inp[0].value,
        "username":inp[1].value,
        "email":inp[2].value,
        
        "street":inp[3].value,
        "suite":inp[4].value,
        "city":inp[5].value,
        "zipcode":inp[6].value,
        
        "lat":inp[7].value,
        "long":inp[8].value,
        
        "phone":inp[9].value,
        "website":inp[10].value,
        
        
        "companyName":inp[11].value,
        "catchPhrase":inp[12].value,
        "companyBs":inp[13].value
        
    } 
    const option = {
        method : 'PUT',
        headers: {"Content-Type" : "application/json"},
        mode: 'cors',
        body : JSON.stringify(resp)
    }
   
    fetch(url, option)
    .then(reponse=>reponse.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

    form.style.display = "none"
    elem.style.display = "block"


}
/////////////////////////////////////// Fonction pour creer les bouton ////////////////////////////////////
function createbutton(div2,clas,text,line) {
    var td= document.createElement("td")
    var div5 = div2.appendChild(td).appendChild(document.createElement('button'))
    div5.classList = clas
    div5.innerText= text
    var form=document.querySelector('form')
    var elem=document.querySelector('table')
    inp=form.querySelectorAll('.input_adduser')
    if(clas=="btn_update"){
        div5.addEventListener('click', (e)=>{
            e.preventDefault()
            form.style.display = "block"
            elem.style.display = "none"
            data_form(line)
            console.log(clas);
            submit.addEventListener('click', (e)=>{
                    Update(e)
                   
                })
        })
    }
    
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
    editline(checkbox,line.id)
    
    if (Profil=="secke"){
        // btn_down.style.desabled = "true"
        createbutton(cretr, "btn_update", "Update",line)
        createbutton(cretr, "btn_del", "Del")
    } else if (Profil=="amy"){
        createbutton(cretr, "btn_update", "Update",line)
    }
    var btn_down = document.querySelector('.btn_update')
    console.log("btn_up",btn_down)
    

 
}

function scroll(data){
    var table=document.querySelector("table")
    console.log(data);
    // var taille= data["users"].length
    // for(var i=0;i<=4;i++){
    //     CreateElement(data.users[i])
    //     }
    //     table.addEventListener("scroll",(e)=>{
    //                     e.preventDefault()
    //                 if(i<taille){
    //                     CreateElement(data.users[i])
    //                 i++


    //                 }
                   
    //     })
    
    

}

    
    




// var btn_scroll = document.querySelector('.clickscrollbar')
fetch('http://127.0.0.1:5000/api_groupe_7/users'+"?token="+token).then(function(res){ 
    return res.json()
}).then(function(data){ 
    scroll(data)
   
    
    return data.users

})
// ############# Methode POST des users ###################

function connect_post(line){
    btn_ajout.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(btn_ajout)
        sessionStorage.setItem('userId', line.id)
        sessionStorage.setItem('name',line.name )
        window.location.replace('user.html')
    })
}

