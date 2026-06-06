export function saveInLocalStorage (a,b){
     let data = {
        nom : a,
        budget : b
     }
     localStorage.setItem('userData',JSON.stringify(data))
     
}

