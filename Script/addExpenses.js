export function addExpense(conteneur, onAdd) {
    const expenseInputBoxes = document.createElement('div');
    expenseInputBoxes.className = 'expenseInputBoxes';
    expenseInputBoxes.innerHTML = `
        <form class="Content">
            <div class="expenseFormHeading">
                <span class="sectionEyebrow">Dépenses</span>
                <h2>Ajouter une dépense</h2>
            </div>
            <div class="inputBoxes">
                <div class="inputBox">
                    <input type="number" id="expenseAmount" min="1000" step="1" placeholder="0 FCFA" required>
                </div>
                <div class="inputBox">
                    <select id="expenseCategory" required>
                        <option value="">-- Veuillez choisir une option --</option>
                        <option value="Transport">Transport</option>
                        <option value="Nourriture">Nourriture</option>
                        <option value="Logement">Logement</option>
                        <option value="Loisirs">Loisirs</option>
                        <option value="Education">Etude</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Abonnement">Abonnement</option>
                        <option value="Evènement">Evènement</option>
                    </select>
                </div>
                <div class="inputBox">
                    <input type="date" id="expenseDate" required>
                </div>
                <div class="inputBox">
                    <input type="text" id="expenseDescription" placeholder="Ex : Taxi vers Cocody" required>
                </div>
            </div>
            <div class="expenseFormActions">
                <button class="addExpense-btn" type="submit">Ajouter la dépense</button>
                <button class="cancelEdit-btn" type="button" hidden>Annuler</button>
            </div>
        </form>
    `;
    conteneur.appendChild(expenseInputBoxes);

    const form = expenseInputBoxes.querySelector('form');
    const heading = form.querySelector('h2');
    const submitButton = form.querySelector('.addExpense-btn');
    const cancelButton = form.querySelector('.cancelEdit-btn');
    let editingIndex = null;

    function cancelEdit() {
        editingIndex = null;
        form.reset();
        heading.textContent = 'Ajouter une dépense';
        submitButton.textContent = 'Ajouter la dépense';
        cancelButton.hidden = true;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const expense = {
            montant: Number(form.querySelector('#expenseAmount').value),
            categorie: form.querySelector('#expenseCategory').value,
            date: form.querySelector('#expenseDate').value,
            description: form.querySelector('#expenseDescription').value.trim()
        };

        if (!expense.montant || !expense.categorie || !expense.date || !expense.description) {
            return;
        }

        onAdd(expense, editingIndex);
        cancelEdit();
    });

    cancelButton.addEventListener('click', cancelEdit);

    return {
        edit(expense, index) {
            editingIndex = index;
            form.querySelector('#expenseAmount').value = expense.montant;
            form.querySelector('#expenseCategory').value = expense.categorie;
            form.querySelector('#expenseDate').value = expense.date;
            form.querySelector('#expenseDescription').value = expense.description;
            heading.textContent = 'Modifier une dépense';
            submitButton.textContent = 'Enregistrer les modifications';
            cancelButton.hidden = false;
            expenseInputBoxes.scrollIntoView({ behavior: 'smooth', block: 'center' });
            form.querySelector('#expenseAmount').focus({ preventScroll: true });
        },
        cancelEdit
    };
}
