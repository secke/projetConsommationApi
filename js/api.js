const formulaire=document.querySelector("#formConnexion")
const profil=document.querySelector("#profil")
const username=document.querySelector("#username")
const motPass=document.querySelector("#password")

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




formulaire.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (validPassword() && (validProfilLamine() || validProfilAmy() || validProfilSecke()) && (!validUsername) ){
        formulaire.submit();
    }else{alert("oops");}
    // profil.value===""?alert("oops"):alert("yes");

});