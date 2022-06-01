////////Function pour modifier un utilisateur/////
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



/////////////////Function supprimer attribut readOnly///
function supreadonly(elem,id){
    elem.addEventListener('dblclick', function () {
            elem.removeAttribute('readonly')
        })
    elem.addEventListener("change",function (){
       var valeur=elem.value
       var cle=elem.getAttribute('class')
        modifuser(id,valeur,cle)
        elem.setAttribute("readonly","true")
    })
    

}


////////// Fonction pour creer un input/////////////
function createinput(div2,val){
    var tab = [ 'name','username','email','address']
    for (i in tab){
        var div4 = div2.appendChild(document.createElement('input'))
        div4.classList = "col"
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


function CreateElement( line ) {
    // var tab = [ 'name','username','email']
    var crediv = document.createElement('div')
    crediv.classList = "container1"
    var div1 = document.querySelector('#content').appendChild(crediv)
    var div2 = div1.appendChild(document.createElement('div'))
    div2.classList="row row-cols-4"
    createinput(div2,line)
   
}


const progressbar = document.querySelector('.scrollbar');



fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    for (var i = 0; i<=4; i++) {
        CreateElement(data.users[i])
    }
    
    document.body.scrollTop = 0
    window.addEventListener('scroll', (e) => {
        
        if (i>=10) {
            e.preventDefault()
        } else {
            CreateElement(data.users[i])
        }
        i += 1
    })

    return data.users

})

