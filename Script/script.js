import {modalNameBudget} from './renderModal.js';
import {userData} from './dataUser.js'
import {validAccueilData} from './validation.js'
import {popUp} from './Popup.js'
import {saveInLocalStorage} from './localStorage.js'



  let mainContent = document.getElementById('mainContent')
    
    if(localStorage.length == 0){
        mainContent.classList.add('load')
        modalNameBudget()
        
        let accueilSaveBtn = document.getElementById('accueilSaveBtn')
        let inputName = document.getElementById('inputName')
         let inputBudget = document.getElementById('inputBudget')
   

    accueilSaveBtn.addEventListener('click', () => {

       if(!validAccueilData(inputName,inputBudget)){
          popUp()
          return null
       } else{
            userData[0].name = inputName.value.trim()
            userData[0].budget = inputBudget.value.trim()
            saveInLocalStorage(inputName.value.trim(),inputBudget.value.trim())
            inputName.value = ''
            inputBudget.value = ''
       }

    });

    }







