function startClickSpeedTest() {
    let clicks = 0;
    let timeLeft = 10;
    document.getElementById("gameArea").innerHTML = `
        <h2>Click Speed Test</h2>
        <p>Click as fast as you can in <span id="timer">10</span> seconds!</p>
        <button id="clickButton">Click Me!</button>
        <p>Clicks: <span id="clickCount">0</span></p>
    `;

    document.getElementById("clickButton").onclick = () => {
        clicks++;
        document.getElementById("clickCount").innerText = clicks;
    };

    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert(`Time's up! You clicked ${clicks} times.`);
        }
    }, 1000);
}

function showRandomFact() {
    const facts = [
        "Bananas are berries, but strawberries aren't.",
        "Octopuses have three hearts.",
        "Honey never spoils.",
        "A day on Venus is longer than a year on Venus.",
        "There are more stars in the universe than grains of sand on Earth."
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("gameArea").innerHTML = `<h2>Random Fact</h2><p>${fact}</p>`;
}

function startGuessNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("gameArea").innerHTML = `
        <h2>Guess the Number</h2>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="guessInput">
        <button onclick="checkGuess()">Submit Guess</button>
        <p id="result"></p>
    `;

    window.checkGuess = function() {
        let guess = parseInt(document.getElementById("guessInput").value);
        let result = document.getElementById("result");
        if (guess < secretNumber) result.innerText = "Too low! Try again.";
        else if (guess > secretNumber) result.innerText = "Too high! Try again.";
        else result.innerText = "Correct! You guessed it!";
    };
}

function startGravityBall() {
    document.getElementById("gameArea").innerHTML = `<h2>Gravity Ball</h2><div id="gravityGame"></div>`;
    const gameArea = document.getElementById("gravityGame");

    gameArea.onclick = function(e) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.left = `${e.clientX - gameArea.offsetLeft}px`;
        ball.style.top = `0px`;
        gameArea.appendChild(ball);

        let speed = 0;
        function fall() {
            speed += 0.5;
            ball.style.top = `${parseFloat(ball.style.top) + speed}px`;
            if (parseFloat(ball.style.top) + 30 < 500) {
                requestAnimationFrame(fall);
            }
        }
        fall();
    };
}

function startPenaltyShootout() {
    document.getElementById("gameArea").innerHTML = `
        <h2>Penalty Shootout</h2>
        <p>Click the ball to shoot! Score by avoiding the goalkeeper.</p>
        <h3>Score: <span id="score">0</span></h3>
        <div style="position:relative; width:400px; height:500px; background:green; margin:auto; border:5px solid white;">
            <div style="width:100%; height:100px; background:white; position:absolute; top:0; border-bottom:5px solid black;">
                <div id="goalkeeper" style="width:50px; height:50px; background:red; position:absolute; top:40px; left:175px; border-radius:50%;"></div>
            </div>
            <div id="ball" style="width:30px; height:30px; background:white; position:absolute; bottom:10px; left:185px; border-radius:50%;"></div>
        </div>
    `;

    let score = 0;
    const ball = document.getElementById("ball");
    const keeper = document.getElementById("goalkeeper");
    const scoreDisplay = document.getElementById("score");

    function moveGoalkeeper() {
        let randomPos = Math.floor(Math.random() * 350);
        keeper.style.left = randomPos + "px";
    }

    function shootBall() {
        ball.style.transition = "bottom 0.5s ease";
        ball.style.bottom = "400px";

        setTimeout(() => {
            if (ball.offsetLeft > keeper.offsetLeft - 30 && ball.offsetLeft < keeper.offsetLeft + 50) {
                alert("Saved! Try again.");
            } else {
                score++;
                scoreDisplay.innerText = score;
                alert("Goal! ⚽🎉");
            }
            ball.style.transition = "none";
            ball.style.bottom = "10px";
            moveGoalkeeper();
        }, 500);
    }

    ball.addEventListener("click", shootBall);
    setInterval(moveGoalkeeper, 1000);
}

function startSpendGame() {
    let money = 1000000;
    let items = [
        { name: "Coffee", cost: 5 },
        { name: "Burger", cost: 10 },
        { name: "Smartphone", cost: 700 },
        { name: "Car", cost: 20000 },
        { name: "Mansion", cost: 500000 },
    ];

    let gameHTML = `<h2>Spend Zain's Money</h2><p>Money: $<span id="money">${money}</span></p>`;
    items.forEach(item => {
        gameHTML += `<button onclick="buyItem(${item.cost})">${item.name} - $${item.cost}</button><br>`;
    });
    document.getElementById("gameArea").innerHTML = gameHTML;
}

function buyItem(cost) {
    let moneyDisplay = document.getElementById("money");
    let money = parseInt(moneyDisplay.innerText);
    if (money >= cost) {
        moneyDisplay.innerText = money - cost;
    } else {
        alert("Not enough money!");
    }
}
