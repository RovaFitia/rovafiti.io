let form = document.querySelector('.form') ;

// Ajouter : 

function afficheModal() {
    let modal = document.querySelector('.containerModal') ;

    let yes = document.querySelector('.yes') ;
    let no = document.querySelector('.no') ;
    let close = document.querySelector('.close') ;

    no.onclick = ()=> {
        modal.style.display = "none" ;
    }

    close.onclick = ()=> {
        modal.style.display = "none" ;
    }

    yes.onclick = ()=> {
        setInterval(()=> {
            this.parentNode.remove() ;
        },200) ;
        modal.style.display = "none" ;
    }

    modal.style.display = "flex" ;


}

function editer() {
    this.previousSibling.style.color = "rgba(105, 210, 105, 0.687)" ;
    this.style.right = "5px" ;
    this.nextSibling.remove() ;
}

function createElement (menu,commande) {
    var listmenu = document.createElement('div') ;
    var p = document.createElement('p') ;

    var edit = document.createElement('button') ;
    var sup = document.createElement('button') ;
    edit.textContent = "Confirm" ;
    sup.textContent = "Sup" ;

    listmenu.classList.add('listmenu') ;
    edit.classList.add('edit') ;
    sup.classList.add('sup') ;
    
    p.append(menu) ;

    listmenu.append(p,edit,sup) ;

    commande.append(listmenu) ;

    // sup : 
    sup.addEventListener('click' , afficheModal) ;
    edit.addEventListener('click' , editer) ;
}

var valider = function (e) {
    e.preventDefault() ;

    let menu = document.querySelector('.menu').value ;
    let commande = document.querySelector('.listCommande') ;

    if(menu) {
        createElement(menu,commande) ;
        form.reset() ;
    }
    else {
        alert('Veuillez entrer votre menu') ;
    }


}

form.addEventListener('submit', valider) ;


// * mode sombre : 

let cercle = document.querySelector('.cercle') ;


function changer() {

    let container = document.querySelector('.container') ;

    let copyright = document.querySelector('.copyright') ;

    copyright.classList.toggle('active') ;
    container.classList.toggle('active') ;
    this.parentNode.parentNode.classList.toggle('active') ;
    this.parentNode.classList.toggle("active") ;
    this.classList.toggle('active') ;
    
    
} 


cercle.addEventListener('click', changer) ;