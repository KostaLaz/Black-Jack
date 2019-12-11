let blackJackGame = {
    'you': {'scoreSpan': '#your-black-jack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-black-jack-result', 'div': '#dealer-box', 'score': 0}, 
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q':10, 'J': 10, 'A':[1, 11]},

};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const HIT_SOUND = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit-btn').addEventListener('click', blackJackHit);
document.querySelector('#deal-btn').addEventListener('click', blackJackDeal);

//Hit button
function blackJackHit(){
    let card = randomCard();
    console.log(card);
   showCard(card, YOU);
   updateScore(card, YOU);
   showScore(card, YOU);
}

//Choose a random card from the deck
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackJackGame['cards'][randomIndex];
  }

  //Show the random card img and value
function showCard(card, activePlayer){
   if(activePlayer['score'] <= 21){ 
    let cardImg = document.createElement('img');
    cardImg.src = `static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImg);
    HIT_SOUND.play();
   }
}

//Deal button 
function blackJackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i = 0; yourImages.length; i++){
        yourImages[i].remove();
    }
    for(let i = 0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }
    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-black-jack-result').textContent = 0;
    document.querySelector('#your-black-jack-result').style.color = '#ffffff';
    document.querySelector('#dealer-black-jack-result').textContent = 0;
    document.querySelector('#dealer-black-jack-result').style.color = '#ffffff';

}

function updateScore(card, activePlayer){
     //If adding 11 keeps me below 21, add 11 else add 1.
     if(card === 'A'){
    
        if(activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21){
        activePlayer['score'] += blackJackGame['cardsMap'][card][1];
    }else{
        activePlayer['score'] += blackJackGame['cardsMap'][card][0];
    }
    
    }else{
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(card, activePlayer){
   if(activePlayer['score'] <= 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
 }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'; 
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red'; 
 }
}


