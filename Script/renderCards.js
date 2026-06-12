export function renderCard (conteneur,totaldépensé,budget,restant){
   let cardsConteneur = document.createElement('div')
   cardsConteneur.className = "cardsConteneur"
   cardsConteneur.innerHTML = `
     <div class="card">
                    <i class='fas fa-money-bill-wave'></i>
                    <div class="info">
                        <div class="card-label">
                            Total dépensé
                        </div>
                        <div class="montant">${totaldépensé} FCFA</div>
                    </div>
                </div>
                <div class="card">
                    <i class='fas fa-chart-pie'></i>
                    <div class="info">
                        <div class="card-label">
                              Budget mensuel
                        </div>
                        <div class="montant">${budget} FCFA</div>
                    </div>
                </div>
                <div class="card">
                    <i class='fas fa-circle-check'></i>
                    <div class="info">
                        <div class="card-label">
                           Reste disponible
                        </div>
                        <div class="montant">${restant} FCFA</div>
                    </div>
                </div>
   `

   conteneur.appendChild(cardsConteneur)

}