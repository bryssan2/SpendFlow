export function modalNameBudget (conteneur) {
  conteneur.innerHTML = 
  `<div class="accueil_card">
            <div class="content">
                <div class="heading">
                    <h1>Bienvenue !</h1>
                    <h2>Veuillez entrer votre prénom et votre budget mensuel</h2>
                </div>
               <div class="inputBoxes">
            <div class="inputBox"><input type="text" id="inputName" placeholder=" "> <label for="inputName">Votre prénom</label></div>
            <div class="inputBox"><input type="number" id="inputBudget" min="1000" placeholder=" "> <label for="inputBudget">Votre budget</label></div>
        </div>
                <button class="accueil_save_btn" id='accueilSaveBtn'>Enregistrer</button>
            </div>
        </div>`   
        return true
}