// ############## Recuperation de l'id du user #############

var Id = sessionStorage.getItem('id')
var token = sessionStorage.getItem('token')

console.log(Id)

// ################ Selectionner les differents champs d'informations du user ######################

var nom = document.querySelector('#name')
var nom_util = document.querySelector('#username')
var tel = document.querySelector('#phone')
var ville = document.querySelector('#website')
var nom_company = document.querySelector('#namec')
var slogan = document.querySelector('#Cphase')
var Bs = document.querySelector('#Bs')

console.log(nom)

//################### Recuperation des infos du user en fonction de son id #######################

url = `http://127.0.0.1:5000/api_groupe_7/users/${Id}`+"?token="+token

fetch(url).then(function (result) {
    return result.json()
    }).then(function (data) {
    
    console.log(data.users[0].address)
    nom.textContent = data.users[0].name
    nom_util.textContent = data.users[0].username
    tel.textContent = data.users[0].address.phone
    ville.textContent = data.users[0].address.city
    nom_company.textContent = data.users[0].company.name
    slogan.textContent = data.users[0].company.catchPhrase
    Bs.textContent = data.users[0].company.bs

})


var logo = document.querySelector('.div_logo_user')
console.log(logo)

logo.addEventListener(('click'), (e)=>{
    e.preventDefault()
    window.location.replace('user.html')
})
