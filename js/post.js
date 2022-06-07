
var body, title

var Id = sessionStorage.getItem('id')

console.log(Id)

var parent = document.body

function cre_elem_fils (par, clas_par, fils, contenu) {
    var parent = document.createElement(par)
    parent.classList = clas_par
    var fils_elem = document.createElement(fils)
    fils_elem.textContent = contenu
    parent.appendChild(fils_elem)
    return parent
}

function crediv (titre, contenu) {
    var div_parent = document.createElement('div') 
    div_parent.setAttribute('id', 'post')
    var div_fils1 = document.createElement('div')
    var div_fils2 = document.createElement('div')
    div_fils1.classList = 'contenu_post'
    div_fils2.classList = 'contenu_post'
    var h2 = document.createElement('h2')
    h2.textContent = `Title: ${titre}`
    var p = document.createElement('p')
    p.textContent = `${contenu}`
    div_fils1.appendChild(h2)
    div_fils2.appendChild(p)
    div_parent.appendChild(div_fils1)
    div_parent.appendChild(div_fils2)
    parent.appendChild(div_parent)

    }

// crediv()

url = 'http://127.0.0.1:5000/api_groupe_7/posts'


console.log(parent)

fetch(url).then(function (result) {
    return result.json()
}).then(function (data) {
    // console.log(data.posts[0])
    for (var i = 0; i<=48; i++) {
        // console.log(data.posts[i].userId)
        if (String(data.posts[i].userId) == Id) {
            console.log()
            var div = crediv(data.posts[i].title, data.posts[i].body)

            console.log(parent)
            console.log(div)
            // parent.appendChild(div)

            
        }
    }
})

var logo = document.querySelector('.div_logo_user')
console.log(logo)

logo.addEventListener(('click'), (e)=>{
    e.preventDefault()
    window.location.replace('user.html')
})