import {modalNameBudget} from './renderModal.js';
import {userData} from './dataUser.js'
import {validAccueilData} from './validation.js'
import {popUp} from './Popup.js'

 

window.addEventListener('load', () => {
  const mainContent = document.getElementById('mainContent')
    mainContent.classList.add('load')
    modalNameBudget ()

    let accueilSaveBtn = document.getElementById('accueilSaveBtn')
    let inputName = document.getElementById('inputName')
    let inputBudget = document.getElementById('inputBudget')

    accueilSaveBtn.addEventListener('click', () => {
       if(!validAccueilData(inputName,inputBudget)){
          popUp()
       }
       
    });
});





