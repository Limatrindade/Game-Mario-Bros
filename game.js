const mario = document.querySelector('.mario-bros');
const pipe = document.querySelector('.pipe');

// uma constante para o pulo do mario
const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
     mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
   

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;

        mario.src="game-over.png";

        mario.style.width = '100px';
        mario.style.marginLeft = '35px';

    }

},10);

document.addEventListener('keydown', jump);