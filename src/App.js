import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/NavBar";
import Wrapper from "./Components/Wrapper";
import FriendCard from "./Components/FriendCard";
import friends from "./friends.json";
import Footer from "./Components/Footer";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    friends: friends,
    clickedCardIds: [],
    score: 0,
    topScore: 0,
    navBarText: "Click on an image to earn points, but don't click on the same image twice!"
  };

  //shuffle the pup cards in the browser when clicked
  clickedFriend = (id) => {
    let clickedCardIds = this.state.clickedCardIds;

    if (clickedCardIds.includes(id)) {
      this.setState({ clickedCardIds: [], navBarText: "Game Over! You lost. Click to play again!", score: 0});
      return;
    } else {
      clickedCardIds.push(id)
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})
      }


      if (this.state.score === 12) {
        this.setState({ score: 0, navBarText: "You Won! Click to play again!", clickedCardIds: [], friends: friends});
        console.log('You Win');
        return;
      }

      this.setState({navBarText: " " });

    }
  }

  // Shuffle Cards: Used randomize array function

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick an element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ friends: friends });

  }

  renderCards = (array) => {
    return this.state.friends.map(friend => (
      <section className="col s4 m3 l3" key={friend.id} id={friend.id}>
        <Wrapper>
          <FriendCard
            name={friend.name}
            image={friend.image}
            reArrangeCards={() => { this.reArrangeCards(this.state.friends) }}
            clickedFriend={() => { this.clickedFriend(friend.id) }} />
        </Wrapper>
      </section>
    )
    )
  }

      render() {
        return (
          <div className="container-fluid">
            <Navbar text={this.state.navBarText} score={this.state.score} topScore={this.state.topScore}/>
            <br />
            <div className="container row cardWrapper">
              {this.renderCards(this.state.cards)}
            </div>
            <Footer/>
          </div>
        );
      }

  // render() {
          //   return (
          //     friends.map((friend) => {
          //       return (
          //         <Wrapper>
          //           <FriendCard
          //             key={friend.id}
          //             name={friend.name}
          //             image={friend.image}
          //           /></Wrapper>

          //       )
          //     })

          //   );
          // }
        }

        export default App;
