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

const move = prompt('Which way?\nw for up\ns for down\nd for right\na for left');