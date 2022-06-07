var Id = sessionStorage.getItem('userId')

console.log(Id)

var logo = document.querySelector('.div_logo_user')
console.log(logo)

logo.addEventListener(('click'), (e)=>{
    e.preventDefault()
    window.location.replace('user.html')
})