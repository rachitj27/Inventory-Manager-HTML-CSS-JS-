var itemInput = document.getElementById("item")
var catInput = document.getElementById("category") 
var addButton = document.getElementById("addButton")
var inventoryDiv = document.getElementById("inventory")
var inventory = {}
//itemName.classList.add("item")
//itemCount.classList.add("item")

addButton.addEventListener("click", addItem)


function addItem () {
  if (inventory[catInput.value] == undefined) {
    inventory[catInput.value] = {} 
   
  }
  
  if (inventory[catInput.value][itemInput.value] == undefined) {
    inventory[catInput.value][itemInput.value] = 0;
    
  }

  inventory[catInput.value][itemInput.value]++
  printInventory()
}

function printInventory () {
  inventoryDiv.innerHTML = ""

  for (category in inventory) {
    var catDiv = document.createElement(`div`)
    var catPar = document.createElement(`h2`)

    catPar.innerHTML = category
    catDiv.appendChild(catPar) 
  
    for (item in inventory[category]) {
      var itemDiv = document.createElement("div")
      var itemName = document.createElement("p")
      var itemCount = document.createElement("p")

      itemName.innerHTML = item
      itemCount.innerHTML = inventory[category][item]

      itemName.classList.add(`item`)
      itemCount.classList.add("itemCount")
     
      itemDiv.appendChild(itemName)
      itemDiv.appendChild(itemCount)
      catDiv.appendChild(itemDiv)
      
    }

    inventoryDiv.appendChild(catDiv)

  }
}