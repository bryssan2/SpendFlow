import {modalNameBudget} from './renderModal.js';
import {userData} from './dataUser.js'
import {validAccueilData} from './validation.js'
import {popUp} from './Popup.js'
import {saveInLocalStorage} from './localStorage.js'


let accueilSaveBtn = document.getElementById('accueilSaveBtn')
    let inputName = document.getElementById('inputName')
    let inputBudget = document.getElementById('inputBudget')
   

  const mainContent = document.getElementById('mainContent')
    
    if(!localStorage){
        mainContent.classList.add('load')
        modalNameBudget()
    accueilSaveBtn.addEventListener('click', () => {
       if(!validAccueilData(inputName,inputBudget)){
          popUp()
       }
        userData[0].name = inputName.value.trim()
        userData[0].budget = inputBudget.value.trim()
        saveInLocalStorage(inputName.value.trim(),inputBudget.value.trim())
        inputName.value = ''
        inputBudget.value = ''
    
    });

    }







