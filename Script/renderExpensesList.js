export function renderExpensesList(expenses, conteneur) {
    const previousList = conteneur.querySelector('.expensesList');
    if (previousList) {
        previousList.remove();
    }

    const section = document.createElement('section');
    section.className = 'expensesList';

    const heading = document.createElement('h2');
    heading.textContent = 'Liste des dépenses';
    section.appendChild(heading);

    if (expenses.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'emptyExpenses';
        emptyMessage.textContent = 'Aucune dépense pour le moment.';
        section.appendChild(emptyMessage);
    } else {
        const list = document.createElement('ul');
        expenses.forEach((expense) => {
            const expenseItem = document.createElement('li');
            expenseItem.className = 'expenseItem';

            const description = document.createElement('p');
            description.className = 'expenseDescription';
            description.textContent = expense.description;

            const amount = document.createElement('p');
            amount.className = 'expenseAmount';
            amount.textContent = `${Number(expense.montant).toLocaleString('fr-FR')} FCFA`;

            const details = document.createElement('p');
            details.className = 'expenseDetails';
            details.textContent = `${expense.categorie} - ${expense.date}`;

            expenseItem.append(description, amount, details);
            list.appendChild(expenseItem);
        });
        section.appendChild(list);
    }

    conteneur.appendChild(section);
}