// ############ Recuperation de l'id du user et de son nom #################

var Id = sessionStorage.getItem('userId')
var name_user = sessionStorage.getItem('name')
console.log(name_user)
// ########## Fonction d'ecoute et de redirection des butons du menu et la redirection sur la page correspondate

var bienvenue = document.querySelector('.bienvenue')
bienvenue.textContent = `BIENVENUE : ${name_user}`

function ecoute(btn, page) {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(post)
        sessionStorage.setItem('id',2)
        window.location.replace(page)
    })
}

// ############### Ecoute sur les differentes boutons du menu #######################

// var btn, page;

var album = document.querySelector('#album')
ecoute(album, 'album.html')
var post = document.querySelector('#post')
ecoute(post, 'post.html')
var todo = document.querySelector('#todo')
ecoute(todo, "todo.html")
var info = document.querySelector('#info')
ecoute(info, 'info.html')


