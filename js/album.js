var par, clas_par,fils, contenu;

var Id = sessionStorage.getItem('id')
var token = sessionStorage.getItem('token')
console.log(token   )

console.log(Id)

var block_album = document.querySelector('.block_body_album')
var titre_album = document.querySelector('.block_body_album h3')
document.body.appendChild(block_album)


function create_buton(parent, contenu){
    var btn = document.createElement('button')
    btn.textContent = contenu
    parent.appendChild(btn)
    return parent
}

var tab = ['edit', 'supprimer', 'voir Photo']

function cre_elem_fils (par, clas_par, fils, contenu) {
    var parent = document.createElement(par)
    parent.classList = clas_par
    var fils_elem = document.createElement(fils)
    fils_elem.textContent = contenu
    parent.appendChild(fils_elem)
    var div = document.createElement('div')
    div.classList = 'block_bouton_album'
    for (elem of tab){
        create_buton(div, elem)
    }
    var hr = document.createElement('hr')
    div.appendChild(hr)
    parent.appendChild(div)

    return parent
}

console.log(block_album)
console.log(titre_album)

url = 'http://127.0.0.1:5000/api_groupe_7/albums'+"?token="+token

fetch(url).then(function (result) {
    return result.json()
    }).then(function (data) {
    console.log(data.albums[0])
    var i =0
    for (elem of data.albums) {
        // console.log(data.posts[i].userId)
        if (String(data.albums[i].userId) == Id) {
            // console.log(block_album)
            parent = cre_elem_fils('div', 'block_body_album', 'h3',`Titre : ${data.albums[i].title}`)
            document.body.appendChild(parent)
            
        }
        i+=1
    }
})


var logo = document.querySelector('.div_logo_user')
console.log(logo)

logo.addEventListener(('click'), (e)=>{
    e.preventDefault()
    window.location.replace('user.html')
})