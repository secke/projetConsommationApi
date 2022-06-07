const formulaire=document.querySelector("#formConnexion")
const profil=document.querySelector("#profil")
const username=document.querySelector("#username")
const motPass=document.querySelector("#password")
const submit=document.querySelector("#boutonConnexion")
// définition des fonctions de validation des inputs

const isProfil=profil.value===''?false:true;
const isMP= motPass.value===''?false:true;

const validUsername=username.value===''?false:true;

const validPassword= function (){
    const re= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#€\$%\&^])(?=.{4,})");
    if (!isMP){
        let saisiMP=motPass.value;
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

const boutonConnexion=document.querySelector('#boutonConnexion')
boutonConnexion.addEventListener('click',(e)=>{
    var valProfil=profil.value
    console.log(valProfil)
    if (validProfilLamine()){

    }
    
})

const Username = document.querySelector("#username")
const password = document.querySelector("#password")

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    resp = {
        'username': Username.value,
        'password' : password.value
    }
    var url = 'http://127.0.0.1:5000/api_groupe_7/login'
        const option = {
            method : 'POST',
            headers: {"Content-Type" : "application/json"},
            mode: 'cors',
            body : JSON.stringify(resp)
        }
    fetch(url, option)
    .then(function (resp) {
        console.log(resp)
    })
    if (validPassword() && (validProfilLamine() || validProfilAmy() || validProfilSecke()) && (!validUsername) ){
        // formulaire.submit()
        var valProfil=profil.value
        sessionStorage.setItem('profil', valProfil)
        window.location.replace('affiche.html');
        // var btn = document.querySelector(".btn_update")
        // console.log(btn)
    }else{alert("oops");}
    // profil.value===""?alert("oops"):alert("yes");

});