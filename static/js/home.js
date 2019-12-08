let blackJackGame = {
    'you': {'scoreSpan': '#your-black-jack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-black-jack-result', 'div': '#dealer-box', 'score': 0} 

};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const HIT_SOUND = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit-btn').addEventListener('click', blackJackHit);
document.querySelector('#deal-btn').addEventListener('click', blackJackDeal);

function blackJackHit(){
   showCard(YOU);
}
function showCard(activePlayer){
    let cardImg = document.createElement('img');
    cardImg.src = 'static/images/Q.png'
    document.querySelector(activePlayer['div']).appendChild(cardImg);
    HIT_SOUND.play();
}
function blackJackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    console.log(yourImages);
    for(let i = 0; yourImages.length; i++){
        yourImages[i].remove();
    }
}

