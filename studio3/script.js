(function () {
    'use strict';

    console.log('JavaScript Loaded');

    const monster1 = document.querySelector('#Billmon');
    const monster2 = document.querySelector('#Glendamon');
    const messages = document.querySelector('#messages');
    const startBtn = document.querySelector('#start');
    const attackBtn = document.querySelector('#attack');
    const healBtn = document.querySelector('#heal');
    const defendBtn = document.querySelector('#defend');
    const controls = document.querySelector('#controls');

    const gameData = {
        monsters: ['Billmon', 'Glendamon'],
        health: [100, 100],
        attack: [10, 20, 30, 40, 50],
        defense: [0, 0],
        index: 0, // Current turn
    };

    // Start Button Logic
    startBtn.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        messages.innerHTML = `<p>${gameData.monsters[gameData.index]} will attack first!</p>`;
        controls.classList.remove('hidden'); // Show the action buttons
        startBtn.classList.add('hidden'); // Hide the start button
    });

    attackBtn.addEventListener('click', () => performAction('attack'));
    healBtn.addEventListener('click', () => performAction('heal'));
    defendBtn.addEventListener('click', () => performAction('defend'));

    function performAction(action) {
        const attackerIndex = gameData.index;
        const defenderIndex = attackerIndex === 0 ? 1 : 0;

        switch (action) {
            case 'attack':
                performAttack(attackerIndex, defenderIndex);
                break;
            case 'heal':
                performHeal(attackerIndex);
                break;
            case 'defend':
                performDefend(attackerIndex);
                break;
        }

        // Pass turn to the other player
        gameData.index = defenderIndex;
        updateTurnMessage();
    }

    function performAttack(attackerIndex, defenderIndex) {
        const attackValue = gameData.attack[Math.floor(Math.random() * gameData.attack.length)];
        const reducedDamage = Math.floor(attackValue * (1 - gameData.defense[defenderIndex] / 100));
        const defenseBlocked = attackValue - reducedDamage;

        gameData.defense[defenderIndex] = 0; // Reset defense
        gameData.health[defenderIndex] = Math.max(gameData.health[defenderIndex] - reducedDamage, 0);
        updateHealthBar(defenderIndex);

        // Trigger attack animation
        const attacker = document.querySelector(`#Billmon`);
        const defender = document.querySelector(`#Glendamon`);

        attacker.classList.add('attack-shake');
        defender.classList.add('attack-fade');

        setTimeout(() => {
            attacker.classList.remove('attack-shake');
            defender.classList.remove('attack-fade');
        }, 500);

        messages.innerHTML = `<p>${gameData.monsters[attackerIndex]} attacked for ${attackValue} damage. 
                              ${gameData.monsters[defenderIndex]}'s defense blocked ${defenseBlocked}, 
                              resulting in ${reducedDamage} damage!</p>`;

        if (gameData.health[defenderIndex] <= 0) {
            endGame(gameData.monsters[attackerIndex]);
        }
    }

    function performHeal(playerIndex) {
        const healAmount = Math.floor(Math.random() * 20) + 10; // Random heal between 10-30
        gameData.health[playerIndex] = Math.min(gameData.health[playerIndex] + healAmount, 100);
        updateHealthBar(playerIndex);

        // Trigger heal animation
        const player = document.querySelector(`#${gameData.monsters[playerIndex]}`);
        player.classList.add('heal-fade');

        setTimeout(() => {
            player.classList.remove('heal-fade');
        }, 500);

        messages.innerHTML = `<p>${gameData.monsters[playerIndex]} healed for ${healAmount} health points!</p>`;
    }

    function performDefend(playerIndex) {
        const defensePercent = Math.floor(Math.random() * 50) + 10; // Random defense between 10-60%
        gameData.defense[playerIndex] = defensePercent;

        // Trigger defend animation
        const player = document.querySelector(`#${gameData.monsters[playerIndex]}`);
        player.classList.add('defend-fade');

        setTimeout(() => {
            player.classList.remove('defend-fade');
        }, 500);

        messages.innerHTML = `<p>${gameData.monsters[playerIndex]} increased their defense by ${defensePercent}% for the next attack!</p>`;
    }

    function updateTurnMessage() {
        const currentPlayer = gameData.monsters[gameData.index];
        messages.innerHTML += `<p>It's now ${currentPlayer}'s turn. Choose an action!</p>`;
    }

    function updateHealthBar(index) {
        const healthBar = document.querySelector(`#healthbar${index} div`);
        const healthText = document.querySelector(`#healthbar${index} .health-text`);
        const healthPercent = gameData.health[index];

        healthBar.style.width = `${healthPercent}%`;
        healthText.textContent = `${healthPercent}%`;
    }

    function endGame(winner) {
        messages.innerHTML = `<p>${winner} wins the battle!</p><button id="reset">Restart Game</button>`;
        controls.classList.add('hidden'); // Hide the action buttons

        // Ensure the reset button works after it is added dynamically
        const resetButton = document.querySelector('#reset');
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
        // Reset game data to the initial state
        gameData.health = [100, 100];
        gameData.defense = [0, 0];
        gameData.index = Math.round(Math.random());

        // Reset health bars and messages
        updateHealthBar(0);
        updateHealthBar(1);
        messages.innerHTML = `<p>${gameData.monsters[gameData.index]} will attack first!</p>`;

        // Show the start button again
        startBtn.classList.remove('hidden');
        controls.classList.add('hidden'); // Hide action buttons initially
    }
})();
