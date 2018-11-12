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
    goal: 5,
    footerText: ""
  };

  //shuffle the pup cards in the browser when clicked
  clickedFriend = (id) => {
    let clickedCardIds = this.state.clickedCardIds;

    if (clickedCardIds.includes(id)) {
      this.setState({ clickedCardIds: [], score: 0, footerText: "Game Over! You lost. Click to play again!" });
      return;
    } else {
      clickedCardIds.push(id)

      if (clickedCardIds.length === 5) {
        this.setState({ score: 5, footerText: "You Won! Click to play again!", clickedCardIds: [] });
        console.log('You Win');
        return;
      }

      this.setState({ clickedCardIds, score: clickedCardIds.length, footerText: " " });

      // for (let i = cards.length - 1; i > 0; i--) {
      //   let j = Math.floor(Math.random() * (i + 1));
      //   [cards[i], cards[j]] = [cards[j], cards[i]];
      // }
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
      <section className='col s4 m3 l3' key={friend.id} id={friend.id}>
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
            <Navbar score={this.state.score} topScore={this.state.topScore}/>
            <br />
            <div className="container row cardWrapper">
              {this.renderCards(this.state.cards)}
            </div>
            <Footer text={this.state.footerText}/>
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
