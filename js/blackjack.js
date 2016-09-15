/*JavaScript for BlackJack-GA Unit 1 Project*/
/*Created by Eric Stermer*/

/********************PSUEDO CODE********************/
/*
Create a game stats object
  contains player bank ammount,
  cards , current bet ammount,
  isGameOver, dealerDeck, discardDeck, player and dealers hand
  isDeckEmpty, playersTurn
  //each card will be an object that contains a cardValue, suit, img, cardName, faceUp
*/

var gameStats = {
  playerBankAmmount: 0,
  betAmmount: 50,
  currentBet: 0,
  discards: 1,
  playerHand: [],
  playerScore: 0,
  dealerHand:[],
  dealerScore: 0,
  isGameOver: false,
  playersTurn: true,
  playerBust: false,
  cardsAreDealt: false
};

/*
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
*/

var App = {

  cards: [{cardName: 'ace', cardValue: 11, img: 'img/acespades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'two', cardValue: 2, img: 'img/twospades.jpeg', suit: 'spades', faceUp: false},
    {cardName: 'three', cardValue: 3, img: 'img/threespades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'four', cardValue: 4, img: 'img/fourspades.jpeg', suit: 'spades', faceUp: false},
    {cardName: 'five', cardValue: 5, img: 'img/fivespades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'six', cardValue: 6, img: 'img/sixspades.jpeg', suit: 'spades', faceUp: false},
    {cardName: 'seven', cardValue: 7, img: 'img/sevenspades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'eight', cardValue: 8, img: 'img/eightspades.jpeg', suit: 'spades', faceUp: false},
    {cardName: 'nine', cardValue: 9, img: 'img/ninespades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'ten', cardValue: 10, img: 'img/tenspades.jpeg', suit:'spades' , faceUp: false},
    {cardName: 'jack', cardValue: 10, img: 'img/jackspades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'queen', cardValue: 10, img: 'img/queenspades.jpeg', suit: 'spades', faceUp: false},
    {cardName: 'king', cardValue: 10, img: 'img/kingspades.jpeg', suit: 'spades', faceUp: false}, {cardName: 'ace', cardValue: 1, img: 'img/aceclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'two', cardValue: 2, img: 'img/twoclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'three', cardValue: 3, img: 'img/threeclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'four', cardValue: 4, img: 'img/fourclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'five', cardValue: 5, img: 'img/fiveclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'six', cardValue: 6, img: 'img/sixclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'seven', cardValue: 7, img: 'img/sevenclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'eight', cardValue: 8, img: 'img/eightclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'nine', cardValue: 9, img: 'img/nineclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'ten', cardValue: 10, img: 'img/tenclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'jack', cardValue: 10, img: 'img/jackclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'queen', cardValue: 10, img: 'img/queenclubs.jpeg', suit: 'clubs', faceUp: false}, {cardName: 'king', cardValue: 10, img: 'img/kingclubs.jpeg', suit: 'clubs', faceUp: false},
    {cardName: 'ace', cardValue: 1, img: 'img/acehearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'two', cardValue: 2, img: 'img/twohearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'three', cardValue: 3, img: 'img/threehearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'four', cardValue: 4, img: 'img/fourhearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'five', cardValue: 5, img: 'img/fivehearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'six', cardValue: 6, img: 'img/sixhearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'seven', cardValue: 7, img: 'img/sevenhearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'eight', cardValue: 8, img: 'img/eighthearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'nine', cardValue: 9, img: 'img/ninehearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'ten', cardValue: 10, img: 'img/tenhearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'jack', cardValue: 10, img: 'img/jackhearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'queen', cardValue: 10, img: 'img/queenhearts.jpeg', suit: 'hearts', faceUp: false},
    {cardName: 'king', cardValue: 10, img: 'img/kinghearts.jpeg', suit: 'hearts', faceUp: false}, {cardName: 'ace', cardValue: 1, img: 'img/acediamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'two', cardValue: 2, img: 'img/twodiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'three', cardValue: 3, img: 'img/threediamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'four', cardValue: 4, img: 'img/fourdiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'five', cardValue: 5, img: 'img/fivediamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'six', cardValue: 6, img: 'img/sixdiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'seven', cardValue: 7, img: 'img/sevendiamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'eight', cardValue: 8, img: 'img/eightdiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'nine', cardValue: 9, img: 'img/ninediamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'ten', cardValue: 10, img: 'img/tendiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'jack', cardValue: 10, img: 'img/jackdiamonds.jpeg', suit: 'diamonds', faceUp: false},
    {cardName: 'queen', cardValue: 10, img: 'img/queendiamonds.jpeg', suit: 'diamonds', faceUp: false}, {cardName: 'king', cardValue: 10, img: 'img/kingdiamonds.jpeg', suit: 'diamonds', faceUp: false}],
  newGame: function(){
    gameStats.isGameOver = false;
    gameStats.playersTurn = true;
    gameStats.cardsAreDealt = false;
    gameStats.playerHand = [];
    gameStats.playerScore = 0;
    gameStats.dealerHand = [];
    gameStats.dealerScore = 0;
    gameStats.playerBankAmmount = 2000;
    //shuffleCards and input to the deck
    gameStats.cards = this.shuffleCards();
  },
  shuffleCards: function(){
    // console.log(gameStats.cards);
    var cards = this.cards;

    // set currentIndex to the last index +1
    var currentIndex = cards.length;
    //declare empty variables for temp value and a random index
    var temporaryValue;
    var randomIndex;

    // Loop through array backwards from card.length to 0
    while (0 !== currentIndex) {

      // pick a random index
      randomIndex = Math.floor(Math.random() * currentIndex);
      //move down an index in cards array
      currentIndex -= 1;

      // temp value is the current element
      temporaryValue = cards[currentIndex];
      //now set the current index to a random element at the random index
      cards[currentIndex] = cards[randomIndex];
      //set the element at the random index to the current element
      cards[randomIndex] = temporaryValue;
    }
    // console.log(cards);
    //set deck to shuffled cards
    return cards;
  },
  dealCard: function(){

    //take the last card off the top of the deck
    var card = this.cards.pop();
    // add card back to beginning of cards array
    this.cards.unshift(card);
    //add 1 to discards number
    gameStats.discards++

    //shuffle cards if gone through entire deck
    if(gameStats.discards === 52){
      this.cards = this.shuffleCards();
      gameStats.discards = 1;
    }

    //send card to player or dealer and create card on DOM
    if(gameStats.playersTurn){
      gameStats.playerHand.push(card);
      UI.createPlayerCard(gameStats.playerHand);
    } else {
      gameStats.dealerHand.push(card);
      UI.createDealerCard(gameStats.dealerHand);
    }
  },
  discardHand: function(){
    //clear hands and the table DOM
    gameStats.playerHand = [];
    gameStats.dealerHand = [];
    UI.clearTable();
  },
  playerBet: function(){
    //add bet ammout to the current bet
    gameStats.currentBet += gameStats.betAmmount;

    //subtract bet ammount from player bank
    gameStats.playerBankAmmount -= gameStats.betAmmount;

  },
  doubleBet: function() {
    gameStats.currentBet *= 2;
  },
  playerWinnings: function(){
    gameStats.playerBankAmmount += (gameStats.currentBet * 2);
  },
  flipCard: function(card){
    if(card.faceUp){
      card.faceUp = false;
    } else {
      card.faceUp = true;
    }
  },
  computerAI: function(){

  },
  handBusted: function(){

  },
  computeHand: function(hand) {
    var sum = 0;

    // add all car values up
    for(var i = 0; i < hand.length; i++){
      sum += hand[i].cardValue;
      console.log(sum);
    }
    //check for an ace in the hand if sum is over 21 subtract 10
    for(var j = 0; j < hand.length; j++){
      if(sum > 21 && hand[j].cardName === 'ace'){
        sum -= 10;
      }
    }

    if(gameStats.playersTurn){
      gameStats.playerScore = sum;
    } else {
      gameStats.dealerScore = sum;
    }

  }
};


/*
Create an UI object to deal with the HTML of the game
  createCard a function that will take in an argument of the card object and return the cardHTML
  slideCard is a function that will translate the card from the deck to the player or dealer spot on table
  clearTable will clear the cards from the table
  postBet will post the bet to the dissplay
  playerBankDisplay will display the ammount in the players bank
  winOrLoseDisplay
  gameOverDisplay
*/

var UI = {

  createPlayerCard: function(hand){
    //reset html
    $('#player-hand').html('');

    //loop through hand and set html and append
    for(var i = 0; i < hand.length; i++){
      var $card = $('<div>').addClass('card');
      var img = hand[i].img;
      $card.html('<img class="card" src="' + img + '">');

      //append to the DOM
      $('#player-hand').append($card);
    }

    App.computeHand(hand);
  },
  createDealerCard: function(hand) {
    //reset html
    $('#dealer-hand').html('');

    //loop through hand and set html and append
    for(var i = 0; i < hand.length; i++){
      var img;

      //make the first card face down
      if(i === 0 && hand[i].faceUp === false){
        img = 'img/cardback.jpg';
      } else {
        img = hand[i].img;
      }

      var $card = $('<div>').addClass('card');
      $card.html('<img class="card" src="' + img + '">');

      //append to the DOM
      $('#dealer-hand').append($card);
    }
    //computer dealers hand
    App.computeHand(hand);
  },
  slideCard: function(){

  },
  clearTable: function(){
    //set inner html of both hands to nothing
    $('#dealer-hand').html('');
    $('#player-hand').html('');
    $('#game-feedback').html('<span>PLACE YOUR BET, THEN PRESS DEAL</span>');
  },
  postBet: function(){
    $('#game-display').html('<span> YOUR CURRENT BET: ' + gameStats.currentBet + '</span>');
  },
  playerBankDisplay: function() {
    $('#bank-display').html('<span>$' + gameStats.playerBankAmmount + '</span>');
  },
  winLoseGameOverDisplay: function(){

  },
  displayGameStatus: function(score) {
    var $gameFeedBack = $('#game-feedback');

    if(gameStats.playersTurn){
      if(score < 21){
        $gameFeedBack.html('<span>YOUR SCORE IS: ' + score + ', HIT OR STAY</span>');
      } else if(score === 21){
        $gameFeedBack.html('<span>YOUR SCORE IS: ' + score + 'YOU SHOULD STAY</span>');
      } else {
        $gameFeedBack.html('<span>' + score + '! BUST!</span>');
      }
    }else {
      if(score <= 21){
        $gameFeedBack.html('<span>DEALER SCORE IS: ' + score + '</span>');
      } else {
        $gameFeedBack.html('<span>' + score + '! BUST!</span>');
      }
    }
  }

};

/*
Create an events object to be event handlers
  Start game - initializes players money
  Deal - deals cards to dealer and player
  Bet - allows a user to bet money just before the hand
  DoubleDown - allows user to double down on a handlers
  Hit - asks dealer to deal player another cards

*/

var Events = {

  startGame: function() {

    //reset or initialize gameStats and DOM
    UI.clearTable();
    $('#game-display').html('<span>WELCOME TO BLACK JACK</span>');
    App.newGame();
    UI.playerBankDisplay();

  },
  deal: function() {
    if(!gameStats.cardsAreDealt){
      for(var i = 0; i < 4; i++){
        App.dealCard();
        if(gameStats.playersTurn){
          gameStats.playersTurn = false;
        } else {
          gameStats.playersTurn = true;
        }
      }
      UI.displayGameStatus(gameStats.playerScore);

      //prevent user from pressing deal until cards need to be dealt again
      gameStats.cardsAreDealt = true;
    }
  },
  bet: function() {
    //must place bet before cards are dealt
    if(!gameStats.cardsAreDealt){
      // can only bet when it is players turn
      if(gameStats.playersTurn){
        App.playerBet();
        UI.postBet();
        UI.playerBankDisplay();
      }
    }
  },
  doubleDown: function(){
    //can only DD when its players turn
    if(gameStats.playersTurn){
      App.doubleBet();
      UI.postBet();
      UI.playerBankDisplay();
    }
  },
  hit: function() {
    if(gameStats.playersTurn){
      //player only allowed to hit up to 5 cards
      if(gameStats.playerHand.length < 5){
        App.dealCard();
        UI.displayGameStatus(gameStats.playerScore);
      } else {
        gameStats.playersTurn = false;
        App.computerAI();
      }
    }
  },
  stay: function() {
    //can only stay if players turn
    if(gameStats.playersTurn){
      gameStats.playersTurn = false;
      App.computerAI();
    }
  }

};

$(function(){

  //document onload ready event handlers
  $('#start-button').on('click', Events.startGame);
  $('#deal').on('click', Events.deal);
  $('#hit').on('click', Events.hit);
  $('#stay').on('click', Events.stay);
  $('#bet').on('click', Events.bet);
  $('#dd').on('click', Events.doubleDown);


});




/******************************************************************************/
