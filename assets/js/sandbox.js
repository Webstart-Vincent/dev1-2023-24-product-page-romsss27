const color = 'red'

const colors = ['pink', 'purpel', color]

const emphasis1 = 'my cars is ' + color[1] + 'and it is beautiful!'
const enphasis2 = ` my car is ${colors[1]} and it is very very beautiful `

// initialisation de l’objet
const car = {
  color: 'red', // propriété : valeur attachée à un objet
  fuel: 'electric', // propriété : valeur attachée à un objet

  // méthode : fonction attachée à un objet
  start() {
    console.log('Vroooom')
  },
}

// appel de la méthode start()
car.start()
