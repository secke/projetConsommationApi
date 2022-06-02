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

var a = 'name'
function createbutton(div2,clas,text,line) {
    var div5 = div2.appendChild(document.createElement('button'))
    div5.classList = clas
    div5.innerText= text
    div5.addEventListener('click', (e)=>{
        e.preventDefault()
        form.style.display = "block"
        elem.style.display = "none"
        data_form(line)
        
        submit.addEventListener('click', (e)=>{
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

var btn_scroll = document.querySelector('.clickscrollbar')
fetch('http://127.0.0.1:5000/api_groupe_7/users').then(function(res){ 
    return res.json()
}).then(function(data){ 
    // console.log(data.users[0]);
    for (var i = 0; i<=6; i++) {
        CreateElement(data.users[i])
    }
    
    // document.body.scrollTop = 0
    btn_scroll.addEventListener('click', (e) => {
        console.log(data.length)
        if (i>=10) {
            e.preventDefault()
            // i += 1
            btn_scroll.style.display = "none"
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


