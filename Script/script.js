import {modalNameBudget} from './renderModal.js';
import {userData} from './dataUser.js'
import {validAccueilData} from './validation.js'
import {popUp} from './Popup.js'
import {saveInLocalStorage} from './localStorage.js'
import {greeting } from './greeting.js'
import { renderCard} from './renderCards.js';
import { addExpense} from './addExpenses.js';
import { renderExpensesList } from './renderExpensesList.js';

const mainContent = document.getElementById('mainContent');

function renderDashboard() {
    const currentUser = userData[0];
    mainContent.innerHTML = '';
    greeting(currentUser.name, mainContent);
    renderCard(mainContent, currentUser.totalSpent, currentUser.budget, currentUser.remnant);
    addExpense(mainContent, (expense) => {
        currentUser.expenses.push(expense);
        currentUser.totalSpent = currentUser.expenses.reduce(
            (total, item) => total + Number(item.montant),
            0
        );
        currentUser.remnant = Number(currentUser.budget) - currentUser.totalSpent;
        saveInLocalStorage(
            currentUser.name,
            currentUser.budget,
            currentUser.totalSpent,
            currentUser.expenses
        );

        const cardAmounts = mainContent.querySelectorAll('.cardsConteneur .montant');
        cardAmounts[0].textContent = `${currentUser.totalSpent.toLocaleString('fr-FR')} FCFA`;
        cardAmounts[2].textContent = `${currentUser.remnant.toLocaleString('fr-FR')} FCFA`;
        renderExpensesList(currentUser.expenses, mainContent);
    });
    renderExpensesList(currentUser.expenses, mainContent);
}

const localStorageData = localStorage.getItem('userData');
if (localStorageData) {
    const savedUserData = JSON.parse(localStorageData);
    userData[0] = {
        ...userData[0],
        ...savedUserData,
        expenses: Array.isArray(savedUserData.expenses) ? savedUserData.expenses : []
    };
    renderDashboard();
} else {
    mainContent.classList.add('load');
    modalNameBudget(mainContent);

    const accueilSaveBtn = document.getElementById('accueilSaveBtn');
    const inputName = document.getElementById('inputName');
    const inputBudget = document.getElementById('inputBudget');

    accueilSaveBtn.addEventListener('click', () => {
        if (!validAccueilData(inputName, inputBudget)) {
            popUp();
            return;
        }

        userData[0].name = inputName.value.trim();
        userData[0].budget = Number(inputBudget.value);
        inputName.value = '';
        inputBudget.value = '';
        mainContent.classList.remove('load');
        saveInLocalStorage(
            userData[0].name,
            userData[0].budget,
            userData[0].totalSpent,
            userData[0].expenses
        );
        renderDashboard();
    });
}

