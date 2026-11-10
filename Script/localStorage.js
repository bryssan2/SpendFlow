export function saveInLocalStorage(name, budget, totalSpent, expenses = []) {
    const data = {
        name,
        budget: Number(budget),
        totalSpent: Number(totalSpent),
        remnant: Number(budget) - Number(totalSpent),
        expenses
    };
    localStorage.setItem('userData', JSON.stringify(data));
}
