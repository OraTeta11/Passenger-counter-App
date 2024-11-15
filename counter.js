// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0
console.log(saveEL)
 
function increment(){
    count += 1
    countEL.innerText = count  // Update the displayed count
}
// create the save button
// Save the count when the button is clicked
function save() {
    let countStr = count + "  -  "  // Format the count
    saveEL.textContent += countStr  // Append the new count to the existing entries
    countEL.textContent= 0
    count = 0                    // Reset the count to 0 after saving
    console.log(count)    // Update the displayed count back to 0
    
}
