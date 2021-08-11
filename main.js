const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArr) {
      this.fieldArr = fieldArr;
  }

//TODO -> make this work to print board without commas
  print() {
      for (let item of this.fieldArr) {
          console.log(item);
          item = item.join('');
      }
      console.log(this.fieldArr.join('\n'));
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

// myField.print();

//get user current position
  //position = [y][x]
let y = 0;
let x = 0;

let position = myField.fieldArr[y][x]

myField.print()

while (true) {

    // checks whether pos is defined
    try {
        position = myField.fieldArr[y][x]
    } catch(err) {
        console.log("You're out of bounds")
        return null
    }


    // checks if user is on hat/inhole
    if (position === 'O') {
        console.log('You fell in a hole!')
        return null
    } else if (position === '^') {
        console.log('You found your hat!')
        return null
    } else {
        myField.fieldArr[y][x] = '*'
    }
        

    // get user input
    let move = prompt('Which way? w for up, s for down, d for right, a for left');

    if (move === 'w') {
        y -= 1;
    } else if (move === 's') {
        y += 1;
    } else if (move === 'd') {
        x += 1;
    } else if (move === 'a') {
        x -= 1;
    } else {
        console.log('Try again')
    }

    //prints out field for user
    myField.print()
}
