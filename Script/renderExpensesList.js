export function renderExpensesList(expenses, conteneur, { onEdit, onDelete }) {
    const previousList = conteneur.querySelector('.expensesList');
    if (previousList) {
        previousList.remove();
    }

    const section = document.createElement('section');
    section.className = 'expensesList';

    const header = document.createElement('div');
    header.className = 'expensesListHeader';
    const headingBlock = document.createElement('div');
    const eyebrow = document.createElement('span');
    eyebrow.className = 'sectionEyebrow';
    eyebrow.textContent = 'Historique';
    const heading = document.createElement('h2');
    heading.textContent = 'Liste des dépenses';
    headingBlock.append(eyebrow, heading);
    const count = document.createElement('span');
    count.className = 'expenseCount';
    count.textContent = `${expenses.length} ${expenses.length === 1 ? 'dépense' : 'dépenses'}`;
    header.append(headingBlock, count);
    section.appendChild(header);

    if (expenses.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'emptyExpenses';
        emptyMessage.textContent = 'Aucune dépense pour le moment.';
        section.appendChild(emptyMessage);
    } else {
        const list = document.createElement('ul');
        expenses.forEach((expense, index) => {
            const expenseItem = document.createElement('li');
            expenseItem.className = 'expenseItem';

            const descriptionBlock = document.createElement('div');
            descriptionBlock.className = 'expenseDescriptionBlock';
            const description = document.createElement('p');
            description.className = 'expenseDescription';
            description.textContent = expense.description;
            descriptionBlock.appendChild(description);

            const amount = document.createElement('p');
            amount.className = 'expenseAmount';
            amount.textContent = `${Number(expense.montant).toLocaleString('fr-FR')} FCFA`;

            const details = document.createElement('p');
            details.className = 'expenseDetails';
            const parsedDate = new Date(`${expense.date}T00:00:00`);
            const formattedDate = Number.isNaN(parsedDate.getTime())
                ? expense.date
                : parsedDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
            details.textContent = `${expense.categorie} - ${formattedDate}`;

            descriptionBlock.appendChild(details);

            const actions = document.createElement('div');
            actions.className = 'expenseActions';
            const editButton = document.createElement('button');
            editButton.className = 'expenseAction-btn editExpense-btn';
            editButton.type = 'button';
            editButton.setAttribute('aria-label', `Modifier ${expense.description}`);
            editButton.innerHTML = '<i class="fas fa-pen" aria-hidden="true"></i><span>Modifier</span>';
            editButton.addEventListener('click', () => onEdit(expense, index));

            const deleteButton = document.createElement('button');
            deleteButton.className = 'expenseAction-btn deleteExpense-btn';
            deleteButton.type = 'button';
            deleteButton.setAttribute('aria-label', `Supprimer ${expense.description}`);
            deleteButton.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i><span>Supprimer</span>';
            deleteButton.addEventListener('click', () => onDelete(index));
            actions.append(editButton, deleteButton);

            expenseItem.append(descriptionBlock, amount, actions);
            list.appendChild(expenseItem);
        });
        section.appendChild(list);
    }

    conteneur.appendChild(section);
}