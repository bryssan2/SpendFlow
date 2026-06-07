export function modalNameBudget (conteneur) {
  conteneur.innerHTML = 
  `<div class="accueil_card">
            <div class="content">
                <div class="heading">
                    <h1>Hello !</h1>
                    <h2>Veuillez entrer votre prénom et votre montant mensuel
                        s'il vous plaît !</h2>
                </div>
               <div class="inputBoxes">
            <div class="inputBox"><input type="text" id="inputName"> <label for="inputName"">Votre pénom</label></div>
            <div class="inputBox"><input type="number" id="inputBudget"> <label for="inputNumber">Votre montant</label></div>
        </div>
                <button class="accueil_save_btn" id='accueilSaveBtn'>Enrégistrer</button>
            </div>
        </div>`   
        return true
}