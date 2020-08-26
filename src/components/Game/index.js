import React, { Component } from 'react';
import characters from "../../characters.json";

const shuffledArr = []

class Game extends Component {
    state = {
        characters: characters,
        score: 0,
        highScore: 0
    }
    //[{id: 1, name: "Farley" , image" "/img/meow.jpg, clicked: false"}]
    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
      };

    itemClicked = (id) => {
        console.log("itemClicked")
        // this.shuffle();
        //  1. iterates through the characters array and check to see that it exist
        // 2. check to see if it has been clicked
        //3. if it has been clicked then we compare current score against high score and if current score is higher then high score then set \high score to be curret score and tehn set current score to 0
        //4. if it has not been clicked 
        //- score increments
        //- and we set clicked to true
        //5. call on shuffle

            if (shuffledArr.includes(id)) {
            //   setMessage('Hello');
            //   state.score(0);
              shuffledArr = [];
              return;
            }


    }
    handleCorrectClick = () => {
        // update state
        //on that obj you will need to toggle clicked to true
        // compare current score to high score
        // call shuffle
    }

    handleIncorrectClick = () => {
        //  reset state to original values
        // call shuffle
    }
    render() {
        return(
        <div>
            <h1>Ta-Da</h1>
            <h1>Score:{this.state.score}</h1>
            <h1>High Score:{this.state.highScore}</h1>
            {this.state.characters.map(character => (
                <img src={character.image} onClick={()=>this.itemClicked(character.id)} />
                ))}
            </div>
    )}
};

export default Game;