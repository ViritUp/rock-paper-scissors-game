const game = () => {
  let playerScore = 0;
  let aiScore = 0;

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const aiHand = document.querySelector('.ai-hand');
    const hands = document.querySelectorAll('.hands img');

    setTimeout(() => {
      playerHand.style.opacity = '1';
      aiHand.style.opacity = '1';
      playerHand.classList.add('in');
      aiHand.classList.add('in');
    }, 1500);

    hands.forEach(hand => {
      hand.addEventListener('animationend', () => {
        hand.style.animation = '';
      }); 
    });

    const aiOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', () => {
        // design
        options.forEach(item => item.classList.add('disabled'));
        option.classList.add('active');
        setTimeout(() => {
          options.forEach(item => item.classList.remove('disabled'));
          option.classList.remove('active');
        }, 2000);

        // ai choise
        const aiNum = Math.floor(Math.random() * 3);
        const aiChoise = aiOptions[aiNum];
        
        setTimeout(() => {
          // compare
          compareHands(option.textContent.toLocaleLowerCase(), aiChoise);
          // update images 
          playerHand.src = `img/human/${option.textContent.toLocaleLowerCase()}.png`;
          aiHand.src = `img/ai/${aiChoise}.png`;
        }, 1900);

        // animation 
        playerHand.style.animation = 'handShake 2s ease';
        aiHand.style.animation = 'handShake 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScoreEl = document.querySelector('.player-score p');
    const aiScoreEl = document.querySelector('.ai-score p');
    playerScoreEl.textContent = playerScore;
    aiScoreEl.textContent = aiScore;
  };

  const compareHands = (playerChoise, aiChoise) => {
    const winner = document.querySelector('.winner');
    // check for tie
    if (playerChoise === aiChoise) {
      winner.textContent = 'IT IS A TIE';
      removeClasses();
      winner.classList.add('tie');
      return;
    }

    // check for rock
    if (playerChoise === 'rock') {
      if (aiChoise === 'paper') {
        removeClasses();
        winner.classList.add('ai');
        winner.textContent = 'AI WINS';
        aiScore++;
        updateScore();
        return;
      } else {
        removeClasses();
        winner.classList.add('player');
        winner.textContent = 'PLAYER WINS';
        playerScore++;
        updateScore();
        return;
      }
    }

    // check for paper
    if (playerChoise === 'paper') {
      if (aiChoise === 'rock') {
        removeClasses();
        winner.classList.add('player');
        winner.textContent = 'PLAYER WINS';
        playerScore++;
        updateScore();
        return;
      } else {
        removeClasses();
        winner.classList.add('ai');
        winner.textContent = 'AI WINS';
        aiScore++;
        updateScore();
        return;
      }
    }

    // check for scissors
    if (playerChoise === 'scissors') {
      if (aiChoise === 'rock') {
        removeClasses();
        winner.classList.add('ai');
        winner.textContent = 'AI WINS';
        aiScore++;
        updateScore();
        return;
      } else {
        removeClasses();
        winner.classList.add('player');
        winner.textContent = 'PLAYER WINS';
        playerScore++;
        updateScore();
        return;
      }
    }

    function removeClasses() {
      winner.classList.remove('tie');
      winner.classList.remove('ai');
      winner.classList.remove('player');
    }
  };

  playMatch();
};


game();