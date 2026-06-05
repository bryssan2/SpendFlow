const mainContent = document.getElementById('mainContent')


let userData = {
    name : '',
    totalSpent : 0,
    budget : 0,
    remnant : 0,
}

function modalNameBudget () {
  mainContent.innerHTML = 
  `<div class="accueil_card">
            <div class="content">
                <div class="heading">
                    <h1>Hello !</h1>
                    <h2>Veuillez entrer votre prénom et votre montant mensuel
                        s'il vous plaît !</h2>
                </div>
               <div class="inputBoxes">
            <div class="inputBox"><input type="text" id="inputName"> <label for="inputName"">Votre pénom</label></div>
            <div class="inputBox"><input type="number" id="inputNumber"> <label for="inputNumber">Votre montant</label></div>
        </div>
                <button class="modal_save_btn">Enrégistrer</button>
            </div>
        </div>`   
}

window.addEventListener('load', () => {
    mainContent.classList.add('load')
  modalNameBudget ()
})


