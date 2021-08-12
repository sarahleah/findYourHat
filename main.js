const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArr) {
      this.fieldArr = fieldArr;
  }

    playGame() {    

        // myField.print();
        
        // get user current position
        //   position = [y][x]
        let y = 0;
        let x = 0;

        let position = this.fieldArr[y][x]

        this.print()

        while (true) {
            
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

            // checks whether pos is defined
            try {
                position = this.fieldArr[y][x]
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
                this.fieldArr[y][x] = '*'
            }
                


            //prints out field for user
            this.print()
        }
    }


  print() {
      let stringItems = []
      for (let i = 0; i < this.fieldArr.length; i++) {
          stringItems.push(this.fieldArr[i].join(''))
      }
      console.log(stringItems.join('\n'))
  }

  static generateRandomField(height, width, chanceOfHole) {
      let newlyGeneratedField = []

      let charOptions = []
          while (charOptions.length < 100) {
              if (chanceOfHole > 0) {
                  charOptions.push('O')
                  chanceOfHole--
              } else {
                  charOptions.push('░')
          }
        }

      const genRandChar = () => {
          let randIndex = Math.floor(Math.random()*100)
          return charOptions[randIndex]
      }

      //height is the amount of arrays within the array
      for (let i = 0; i < height; i++) {
        let singleLine = []
        //width is the length of the internal arrays
          for (let i = 0; i < width; i++) {
              let newChar = genRandChar()
              singleLine.push(newChar)
          }
        newlyGeneratedField.push(singleLine);
      }

      let randYIndex = Math.floor(Math.random()*height)
      let randXIndex = Math.floor(Math.random()*width)
      newlyGeneratedField[randYIndex][randXIndex] = '^'
      newlyGeneratedField[0][0] = '*'
      //console.log(newlyGeneratedField)
      return newlyGeneratedField
  }
}


const randField = Field.generateRandomField(24, 36, 21)

const newField = new Field(randField)

newField.playGame()