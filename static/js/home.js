let blackJackGame = {
    'you': {'scoreSpan': '#your-black-jack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-black-jack-result', 'div': '#dealer-box', 'score': 0} 

};
const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const HIT_SOUND = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit-btn').addEventListener('click', blackJackHit);
function blackJackHit(){
    let cardImg = document.createElement('img');
    cardImg.src = 'static/images/Q.png'
    document.querySelector(YOU['div']).appendChild(cardImg);
    HIT_SOUND.play();
}

