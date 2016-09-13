/*JavaScript for BlackJack-GA Unit 1 Project*/
/*Created by Eric Stermer*/

/********************PSUEDO CODE********************/
/*
Create AI for computer logic as dealer

Create a game stats object
  contains player bank ammount,
  cards , current bet ammount,
  isGameOver, dealerDeck, discardDeck, player and dealers hand
  isDeckEmpty, playersTurn
  //each card will be an object that contains a cardValue, suit, img, cardName, faceUp

Create an App object that deals with the logic of the game
  gameIsOver - function that checks the bank account if anything is lefft in it and changes isGameOver to true
  newGame - function that clears and reinitializes the decks, isGameOver and playerrs bank
  shuffleCards - checks if deck is empty, moves all cards from discard pile to dealerDeck and shuffles their order
  dealCard- checks whose turn it is, takes a card from deck and pushes it to player or computers hand
  newHand - when deal button is hit deal cards in alternating order by looping 4 times, calling dealCard,
    changin player turn after each card dealt
    on second card dealt only, diplay card facedown
  discardHand - after hand is played empties comp and player hands, puts cards in discardDeck
  playerBet - adds bet to betAmmount and removes it from playerBank
  adjustPlayerBank - when player sets bet remove money from bank, add winnings back to bank
  flipCard - change status of card to either showing or not

Create an UI object to deal with the HTML of the game
  createCard a function that will take in an argument of the card object and return the cardHTML
  slideCard is a function that will translate the card from the deck to the player or dealer spot on table
  clearTable will clear the cards from the table
  postBet will post the bet to the dissplay
  playerBankDisplay will display the ammount in the players bank
  winOrLoseDisplay
  gameOverDisplay

Create an events object to be event handlers
  Start game - initializes players money
  Deal - deals cards to dealer and player
  Bet - allows a user to bet money just before the hand
  DoubleDown - allows user to double down on a handlers
  Hit - asks dealer to deal player another cards



*/
