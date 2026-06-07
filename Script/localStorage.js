export function saveInLocalStorage (a,b){
     let data = {
        name : a,
        budget : b
     }
     localStorage.setItem('userData',JSON.stringify(data))
     
}

