class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _firstName
    this.age = _firstName
    this.location = _location
  }
  etàdifferente(i) {
    if (this.age > i.age) {
      return `${this.firstName} è più vecchio di ${i.fistName}`
    } else if (this.age < i.age) {
      return `${i.fistName} è più vecchio di ${this.fistName}`
    } else {
      return `${this.firstName} e ${i.fistName} hanno la stessa età`
    }
  }
}
const persona1 = new User('Aldo', 'Baglio', 66, 'Palermo')
const persona2 = new User('Giovanni', 'Storti', 68, 'Milano')
const persona3 = new User('Giacomo', 'Poretti', 69, ' Varese')

console.log(persona1.etàdifferente(persona2))
console.log(persona1.etàdifferente(persona3))
console.log(persona2.etàdifferente(persona1))
console.log(persona2.etàdifferente(persona3))
console.log(persona3.etàdifferente(persona1))
console.log(persona3.etàdifferente(persona2))
