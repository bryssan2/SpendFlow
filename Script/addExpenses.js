export function addExpense (conteneur) {
   let expenseInputBoxes = document.createElement('div')
   expenseInputBoxes.className = "expenseInputBoxes"
   expenseInputBoxes.innerHTML = `
    <div class="Content">
      <h2>Ajouter une dépense</h2>
            <div class="inputBoxes">
                <div class="inputBox">
                    <input type="number" id="montant" min="1000" placeholder="0 FCFA">
                </div>
                <div class="inputBox">
                    <select id="catégorie">
                        <option value>-- Veuillez choisir une option--</option>
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
                    <input type="date" id="date" placeholder="Date">
                </div>
                <div class="inputBox">
                    <input type="text" id="Description"
                        placeholder="Ex : Taxi vers Cocody">
                </div>
            </div>
            </div>
   `
   conteneur.appendChild(expenseInputBoxes)
}