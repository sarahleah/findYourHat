const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArr) {
      this.fieldArr = fieldArr;
  }

  print() {
      for (let i in this.fieldArr) {
          this.fieldArr[i] = this.fieldArr[i].join('');
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
  //position = [y[x]]
let y = 0;
let x = 0;
let position = myField.fieldArr[y[x]]

//get user input
let move = prompt('Which way?\nw for up\ns for down\nd for right\na for left');
switch (move) {
    case 'w':
        //w up
        y -= 1;
        break;
    case 's': 
        //s down
        y += 1;
        break;
    case 'd': 
        //d right
        x += 1;
        break;
    case 'a':
        //a left
        x -= 1;
        break;
}
//print current field
position = myField.fieldArr[y[x]];
//check whether input is out of bounds/on hat/in hole
//tell user

