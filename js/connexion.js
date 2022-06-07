const asideSection=document.querySelector('aside');
const mainSection=document.querySelector('main');

const signInBtn=document.querySelector('#sign-in-btn')
const signUpBtn=document.querySelector('#sign-up-btn')

signInBtn.addEventListener('click',()=>{
    mainSection.classList.add('slideRight');
    asideSection.classList.add('slideLeft');

});

signUpBtn.addEventListener('click',()=>{
    mainSection.classList.remove('slideRight');
    asideSection.classList.remove('slideLeft');
});


// """"""""""""  

const formulaire1=document.querySelector(".formulaire1")
const formulaire2=document.querySelector(".formulaire2")
const profil=document.querySelector("#profil")
const username1=document.querySelector("#username1")
const motPass1=document.querySelector("#password1")
const username2=document.querySelector("#username2")
const motPass2=document.querySelector("#password2")

// définition des fonctions de validation des inputs

const isProfil=profil.value===''?false:true;
const isMP1= motPass1.value===''?false:true;
const isMP2= motPass2.value===''?false:true;

const validUsername1=username1.value===''?false:true;
const validUsername2=username2.value===''?false:true;

const validPassword1= function (){
    const re= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#€\$%\&^])(?=.{4,})");
    if (!isMP1){
        let saisiMP=motPass1.value;
        return re.test(saisiMP);
    }
};

const validPassword2= function (){
    const re= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#€\$%\&^])(?=.{4,})");
    if (!isMP2){
        let saisiMP=motPass2.value;
        return re.test(saisiMP);
    }
};


const validProfilLamine= () => {
    if (!isProfil) {
        let nomProfil=profil.value;
        let sortieProfil=nomProfil.trim()==="lamine"?true:false;
        return sortieProfil
    }
};


const validProfilAmy= () => {
    if (!isProfil) {
        let nomProfil=profil.value;
        let sortieProfil=nomProfil.trim()==="amy"?true:false;
        return sortieProfil
    }
};

const validProfilSecke= () => {
    if (!isProfil) {
        let nomProfil=profil.value;
        let sortieProfil=nomProfil.trim()==="secke"?true:false;
        return sortieProfil
    }
};



// const boutonConnexion=document.querySelector('#boutonConnexion')
// boutonConnexion.addEventListener('click',(e)=>{
//     var valProfil=profil.value
//     console.log(valProfil)
//     if (validProfilLamine()){

//     }
    
// })

const Username = document.querySelector("#username")
const password = document.querySelector("#password")

formulaire1.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    
    if (validPassword1() && (validProfilLamine() || validProfilAmy() || validProfilSecke()) && (!validUsername1) ){
        // formulaire.submit()

        // resp = {
        //     'username': Username.value,
        //     'password' : password.value
        // }
        // var url = 'http://127.0.0.1:5000/api_groupe_7/login'
        
        // fetch('http://127.0.0.1:5000/api_groupe_7/login',{
        // method : 'POST',
        // headers: {"Content-Type" : "application/json"},
        // mode: 'cors',
        // body : JSON.stringify({
        //     'Profil':profil.value,
        //     'username': username1.value,
        //     'password' : motPass1.value
        // })})
        // .then(prom => prom.json())
        // .then(sortie => {
        //     let tok=sortie.token
        //     sessionStorage.setItem('token',tok)})
       
        
        var valProfil=profil.value
        var user1=username1.value
        var pass1=motPass1.value
        sessionStorage.setItem('profil', valProfil)
        sessionStorage.setItem('username', user1)
        sessionStorage.setItem('password', pass1)
        window.location.replace('affiche.html');
        // var btn = document.querySelector(".btn_update")
        // console.log(btn)
    }else{alert("oops");}

});

formulaire2.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    
    if (validPassword2()  && (!validUsername2) ){
        // formulaire.submit()

        // resp = {
        //     'username': Username.value,
        //     'password' : password.value
        // }
        var url = 'http://127.0.0.1:5000/api_groupe_7/login'
        fetch('http://127.0.0.1:5000/api_groupe_7/login',{
            method : 'POST',
            headers: {"Content-Type" : "application/json"},
            // mode: 'cors',
            body : JSON.stringify({
                'username': username2.value,
                'password' : motPass2.value
        })})
        .then(prom=>prom.json())
        .then(sortie => {
            let tok=sortie.token
            sessionStorage.setItem('token',tok)})
        // var valProfil=profil.value
        // sessionStorage.setItem('profil', valProfil)
        window.location.replace('affiche.html');
        // var btn = document.querySelector(".btn_update")
        // console.log(btn)
    }else{alert("oops");}

});