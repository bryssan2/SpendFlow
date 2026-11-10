export function renderCard(conteneur, totalDepense, budget, restant) {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cardsConteneur';

    const cards = [
        { icon: 'fa-money-bill-wave', label: 'Total dépensé', amount: totalDepense },
        { icon: 'fa-chart-pie', label: 'Budget mensuel', amount: budget },
        { icon: 'fa-circle-check', label: 'Reste disponible', amount: restant }
    ];

    cards.forEach(({ icon, label, amount }) => {
        const card = document.createElement('div');
        card.className = 'card';

        const iconElement = document.createElement('i');
        iconElement.className = `fas ${icon}`;
        iconElement.setAttribute('aria-hidden', 'true');

        const info = document.createElement('div');
        info.className = 'info';

        const cardLabel = document.createElement('div');
        cardLabel.className = 'card-label';
        cardLabel.textContent = label;

        const cardAmount = document.createElement('div');
        cardAmount.className = 'montant';
        cardAmount.textContent = `${Number(amount).toLocaleString('fr-FR')} FCFA`;

        info.append(cardLabel, cardAmount);
        card.append(iconElement, info);
        cardsContainer.appendChild(card);
    });

    conteneur.appendChild(cardsContainer);
}