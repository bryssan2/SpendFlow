
export function greeting (nom,conteneur){
  conteneur.innerHTML = `<div class="greetingSection">
      <h1>
        Hello ${nom} !</h1>
     <h2>
        Voici le résumé de vos dépenses du mois
     </h2>
</div>`
}