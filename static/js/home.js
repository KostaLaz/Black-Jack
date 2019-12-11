let blackJackGame = {
    'you': {'scoreSpan': '#your-black-jack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-black-jack-result', 'div': '#dealer-box', 'score': 0}, 
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],

};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const HIT_SOUND = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit-btn').addEventListener('click', blackJackHit);
document.querySelector('#deal-btn').addEventListener('click', blackJackDeal);

function blackJackHit(){
    let card = randomCard();
    console.log(card);
   showCard(YOU);
   showCard(DEALER);
}
function showCard(activePlayer){
    let cardImg = document.createElement('img');
    cardImg.src = 'static/images/Q.png'
    document.querySelector(activePlayer['div']).appendChild(cardImg);
    HIT_SOUND.play();
}
function blackJackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i = 0; yourImages.length; i++){
        yourImages[i].remove();
    }
    for(let i = 0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }
}
function randomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return blackJackGame['cards'][randomIndex];
}


