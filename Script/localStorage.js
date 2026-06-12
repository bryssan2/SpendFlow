export function saveInLocalStorage (a,b,c){
     let data = {
        name : a,
        budget : b,
        totalSpent : c,
        remnant : b - c
     }
     localStorage.setItem('userData',JSON.stringify(data))
     
}

