const background = document.querySelector('.background');
const dino = document.querySelector('.dino');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
	if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
    	if (!isJumping) {
    	  	jump();
    	}
  	}
}

function jump() {
	isJumping = true;

	let upInterval = setInterval(() => {
    	if (position >= 250) {
			clearInterval(upInterval);

			let downInterval = setInterval(() => {
				if (position <= 0) {
					clearInterval(downInterval);
					isJumping = false;
				} else {
					position -= 10;
					dino.style.bottom = position + 'px';
				}
			}, 10);
		} else {
			position += 15;
			dino.style.bottom = position + 'px';
	    }	
  	}, 10);
}

function createCactus() {
	const cactus = document.createElement('div');
	let cactusPosition = 1200;
	let randomTime = 500 + Math.random() * 5000;

	if (isGameOver) return;

	cactus.classList.add('cactus');
	background.appendChild(cactus);
	cactus.style.left = cactusPosition + 'px';

	let leftTimer = setInterval(() => {
		if (cactusPosition < -50) {
			clearInterval(leftTimer);
			background.removeChild(cactus);
		} else if (cactusPosition > 0 && cactusPosition < 30 && position < 60) {
			clearInterval(leftTimer);
			isGameOver = true;
			document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
		} else {
			cactusPosition -= 5;
			cactus.style.left = cactusPosition + 'px';
		}
	}, 10);

  	setTimeout(createCactus, randomTime);
}

document.addEventListener('keyup', handleKeyUp);
createCactus();
