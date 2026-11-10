
export function greeting(nom, conteneur) {
    const section = document.createElement('div');
    section.className = 'greetingSection';

    const title = document.createElement('h1');
    title.textContent = `Hello ${nom} !`;

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Voici le résumé de tes dépenses du mois';

    section.append(title, subtitle);
    conteneur.appendChild(section);
}