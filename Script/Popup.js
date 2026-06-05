

export function popUp (){
  const Popup = document.createElement('div')
  Popup.className = 'popUpErrorOverlay'
  Popup.innerHTML = `
  <div class="popUp">
                <h1>Ouups! Il y'a une erreur</h1>
                <h4>Veuillez entrer votre prénom et un montant supérieur à 1000
                </h4>
            </div>
            `   
    document.body.appendChild(Popup)
}
