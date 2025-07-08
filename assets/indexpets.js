class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  sameOwner(i) {
    if (this.ownerName == i.ownerName) {
      return `${this.ownerName} è il padrone di ${this.petName} e ${
        i.petName
      } ? ${true} `
    } else {
      return `${this.ownerName} è il padrone di ${this.petName} e ${
        i.petName
      } ? ${false} `
    }
  }
}

const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('speciesName')
const breedInput = document.getElementById('breedName')

const petForm = document.getElementById('petForm')
petForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nuovoPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  petForm.reset()
})

// const arrayOfPets = []
// arrayOfPets.push(nuovoPet)
// const areaDiTesto = document.getElementById('textArea')
// const listaAnimaliul = document.createElement('ul')
// const listaAnimali = document.createElement('li')
// areaDiTesto.appendChild(listaAnimaliul)
// listaAnimaliul.appendChild(listaAnimali)
// listaAnimali.innerText = arrayOfPets

// const pet1 = new Pet('Fufy', 'Giovanni', 'Cane', 'Chiwawa')
// const pet2 = new Pet('Bobby', 'Roberto', 'Cane', 'Labrador')
// const pet3 = new Pet('Pimpy', 'Giovanni', 'Gatto', 'Persiano')
// console.log(pet1.sameOwner(pet2))
// console.log(pet1.sameOwner(pet3))
