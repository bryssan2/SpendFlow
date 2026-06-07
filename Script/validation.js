
export function validAccueilData (a,b){
    const regex = /^[a-zA-Zùéàçôêîùûè\-s]+$/
   if ( !regex.test(a.value.trim()) || !a.value.trim()){
      return false
   }
  
   if (b.value < 1000 || !b.value) return false 
   
   return true
}

