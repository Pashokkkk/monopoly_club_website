// Select the menu button and menu content
const menuContainer = document.querySelector('.menu-container');
const menuContent = document.querySelector('.menu-content');

// Show the menu when hovering over the button
menuContainer.addEventListener('mouseover', () => {
    menuContent.style.display = 'block';
});


// Hide the menu when moving the mouse away
menuContainer.addEventListener('mouseout', (event) => {
    // Check if the mouse is completely out of the container and links
    if (!menuContainer.contains(event.relatedTarget)) {
        menuContent.style.display = 'none';
    }
});

// Change image on hover
function changeImage(img) {
    img.src = "images/hover-image.png"; // Replace with the path to your second image
}

// Revert to the original image
function revertImage(img) {
    img.src = "images/original-image.jpg"; // Replace with the path to your original image
}

// Show rating feedback
function showRating(value) {
    const ratingMessage = document.getElementById('rating-message');
    switch (parseInt(value)) {
        case 1:
            ratingMessage.textContent = "Terrible 😢";
            break;
        case 2:
            ratingMessage.textContent = "Not great 😕";
            break;
        case 3:
            ratingMessage.textContent = "Okay 🙂";
            break;
        case 4:
            ratingMessage.textContent = "Good 👍";
            break;
        case 5:
            ratingMessage.textContent = "Excellent 🌟";
            break;
        default:
            ratingMessage.textContent = "Slide to rate!";
    }
}


// Display the entered board game in a styled paragraph
function displayBoardGame() {
    const input = document.getElementById("game-input").value; // Get user input
    const display = document.getElementById("displayed-game");

    if (input.trim() === "") {
        display.textContent = "Please enter a board game!"; // Handle empty input
        display.style.color = "red";
        return;
    }

    // Display the entered board game with different styles
    display.textContent = `Your favorite board game: ${input}`;
    display.style.color = "#ff6600"; 
    display.style.fontSize = "24px"; 
    display.style.fontWeight = "bold"; 
}

// Compare the entered board game with a randomly generated one
function compareBoardGame() {
    const input = document.getElementById("game-input").value.trim().toLowerCase();
    const randomBoardGames = [
        "Monopoly",
        "Chess",
        "Catan",
        "Scrabble",
        "Risk",
        "Ticket to Ride",
        "Clue",
        "Carcassonne",
        "Pandemic"
    ];
    const randomBoardGame = randomBoardGames[Math.floor(Math.random() * randomBoardGames.length)].toLowerCase();
    const result = document.getElementById("comparison-result");

    if (input === "") {
        result.textContent = "Please enter a board game to compare!";
        result.style.color = "red";
        return;
    }

    if (input === randomBoardGame) {
        result.textContent = `Congratulations! You guessed correctly. The board game is "${randomBoardGame}". 🎉`;
        result.style.color = "green";
    } else {
        result.textContent = `Oops! You guessed "${input}", but the board game was "${randomBoardGame}". Try again!`;
        result.style.color = "red";
    }
}

// Board Game Data
const boardGames = [
    {
        name: "Monopoly",
        year: "1935",
        category: "Economic Strategy",
        designer: "Charles Darrow",
        image: "images/monopolyy.jpg"           //https://consumercare.hasbro.com/en-us/product/monopoly-game/7EABAF97-5056-9047-F577-8F4663C79E75
    },
    {
        name: "Chess",
        year: "6th Century",
        category: "Abstract Strategy",
        designer: "Unknown",
        image: "images/chess.jpg"               //https://rybkaforum.net/
    }, 
    {
        name: "Catan",
        year: "1995",
        category: "Resource Management",
        designer: "Klaus Teuber",
        image: "images/catan.jpg"               //https://www.joom.ru/ru/products/5db2ea928b451301013fc559
    },
    {
        name: "Scrabble",
        year: "1938",
        category: "Word Game",
        designer: "Alfred Butts",
        image: "images/scrabble.jpg"            //https://en.wikipedia.org/wiki/Scrabble
    },
    {
        name: "Risk",
        year: "1957",
        category: "Strategy and Conquest",
        designer: "Albert Lamorisse",
        image: "images/risk.jpg"                //https://www.boardgamer.ie/products/risk 
    },
    {
        name: "Ticket to Ride",
        year: "2004",
        category: "Route Building",
        designer: "Alan R. Moon",
        image: "images/tickettoride.jpg"        //https://davidmillard.org/2009/01/07/cynical-ticket-to-ride-uk-variant/
    },
    {
        name: "Clue",
        year: "1949",
        category: "Mystery/Detective",
        designer: "Anthony E. Pratt",
        image: "images/clue.jpg"                //https://boardgamegeek.com/image/7563466/clue
    },
    {
        name: "Carcassonne",
        year: "2000",
        category: "Tile Placement",
        designer: "Klaus-Jürgen Wrede",
        image: "images/carcassonne.jpg"         //https://www.cogstoysandgames.ie/products/carcassonne
    },
    {
        name: "Pandemic",
        year: "2008",
        category: "Cooperative Strategy",
        designer: "Matt Leacock",
        image: "images/pandemic.jpg"            //https://playerlair.net/artificial-intelligence-and-cooperative-games-pandemic/
    }
];

// Function to randomly select a board game
function startGame() {
    const randomIndex = Math.floor(Math.random() * boardGames.length);
    const selectedGame = boardGames[randomIndex];

    document.getElementById("game-name").textContent = selectedGame.name;
    document.getElementById("game-year").textContent = selectedGame.year;
    document.getElementById("game-category").textContent = selectedGame.category;
    document.getElementById("game-designer").textContent = selectedGame.designer;
    document.getElementById("game-image").src = selectedGame.image;

    // Show the board game info section
    document.getElementById("game-info").classList.remove("hidden");
}

// Event Listener for the Start Game Button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-game-button").addEventListener("click", startGame);
});

