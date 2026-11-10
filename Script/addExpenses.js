export function addExpense(conteneur, onAdd) {
    const expenseInputBoxes = document.createElement('div');
    expenseInputBoxes.className = 'expenseInputBoxes';
    expenseInputBoxes.innerHTML = `
        <form class="Content">
            <h2>Ajouter une dépense</h2>
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
            <button class="addExpense-btn" type="submit">Ajouter</button>
        </form>
    `;
    conteneur.appendChild(expenseInputBoxes);

    const form = expenseInputBoxes.querySelector('form');
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

        onAdd(expense);
        form.reset();
    });
}
