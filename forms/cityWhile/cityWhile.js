let citie = []
let doneWithCities = false 
let i = 0

while (doneWithCities == false) {
    citie[i] = prompt ("Enter the next city:")
    i++
    doneWithCities = confirm ("Are you done entering cities?")    
  }    
  
let allCities = citie
  
for(i = 0; i < allCities.length; i++)
console.log(allCities[i])