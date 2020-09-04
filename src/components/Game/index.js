import React, { Component } from "react";
import Container from "../Container";
import Clicked from "../Clicked";
import Navbar from "../Navbar";
import data from "../../data.json";

class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffle(this.state.data) });
  }
//[{id: 1, name: "Farley" , image" "/img/meow.jpg, clicked: false"}]
  shuffle = data => {
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

  ItemClicked = id => {
        //     console.log("itemClicked")
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectClick(newData)
      : this.handleIncorrectClick(newData);
  };


        // update state
        //on that obj you will need to toggle clicked to true
        // compare current score to high score
        // call shuffle
  handleCorrectClick = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.shuffle(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

          //  reset state to original values
        // call shuffle
  handleIncorrectClick = data => {
    this.setState({
      data: this.resetScore(data),
      score: 0
    });
  };

  resetScore = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffle(resetData);
  };


  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Container>
          {this.state.data.map(item => (
            <Clicked
              key={item.id}
              id={item.id}
              handleClick={this.ItemClicked}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
