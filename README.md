# Project 1 - PITCH INVADERS!

## Overview

This is my first project whilst enrolling on General Assembly’s Software Engineering Immersive Course. The assignment was to create a grid-based game using HTML, CSS, and JavaScript. Due to my motivation and ambition in combining sports and tech, I have decided to create a Premier League themed “Space-Invaders” game. 

## Requirements

- Render a game in the browser
- Be built on a grid: do not use HTML Canvas for this
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it (we will do this together at the end of the project)
- Use semantic markup for HTML and CSS (adhere to best practices)

## Timeframe
The timeframe given for this project was one-week. I worked independently on the project.

## Technologies Used
- HTML
- CSS
- JavaScript
- VS Code
- Excalidraw

## Deployed Project Link
https://suhholee.github.io/Space-Invaders/

![Screen Grab of finished version](/assets/pi.gif)

## Plan

### Wireframe
Below is the wireframe I have used to plan out my project into specific elements using Excalidraw. This wireframe served as the basis of my MVP, whilst adding numerous elements as I progressed into my game.

![Excalidraw screenshot](/assets/space-invaders-wireframe.png)

### Pseudocode
As it was my first project on the course, I decided to be as detailed as possible for my pseudocode. After setting the necessary elements and variables, I decided to create the game in a chronological order. Therefore, I started with the pseudocode for the select player display. Then, I pseudo-coded the grid for the actual game. The specific elements from adding, removing, and moving the player, opponent, and the footballs were added to expand on the grid. Finally, the game elements such as the two level statuses, end game status, and the restart game statuses were set. Along the way, I decided to add events and extra elements/variables that seemed necessary.

```js
function init() {

 // ! Elements
 // Left container elements

 // Select player display
 
  // Grid
 
 // Different levels
 

 // ! Variables
 // * Grid variables
 // Width
 
 // Total cells
 
 // Starting position of the player
 
 // * Keyboard(keyCode) variables
 
 // * Other variables
 // Score
 
 // Lives

 // Current level

 // Number of opponents

 // Opponent movement interval

 // Decrease time (used when levels up)

 // Timer for the intervals

 // Won boolean


 // ! Executions
 // Select player function
 function selectPlayer() {
   // If a player is selected, change the image of the player by adding a style class in CSS
   // Remove the other players div containers and enlarge the selected player by adding a class/transition
   // Start the game 2-3 seconds after after the player is selected
   startGame()
 }

 // Create the pitch grid
 function createGrid() {
   // Using the total cell count we've saved to a variable we're going to use a for loop to iterate that many times
     // Create div


     // Add index as innerText


     // Data attribute representing the index


     // Append to grid


     // Push cell into cells array
   }
 }

 // Start game function
 function startGame() {
   // Reset the variables back to default values
   restartGame()
   // Hide the select player class

   // Unhide the grid class

   // Move the opponents ('end game if the player dies' is within the moveOpponents function)
   moveOpponents()

   // If let opponents is zero in level one, unhide the won-level-one div class, temporarily stop the keyboards from activating, and hide the grid.
 }


 // Level two function
 function levelTwo() {
   // Set the current level display inner HTML as 2
   // Reset opponent number
   // Interval is shortened
   // Reset starting position

   // Apply move opponent function with the new interval (end game is within the moveOpponents function)
   moveOpponents()
   // If let opponents is zero in level two, unhide the won-level-two div class, temporarily stop the keyboards from activating, hide the grid.
 }


 // Level three function
 function levelThree() {
   // Set the current level display inner HTML as 3
   // Reset opponent number
   // Interval is shortened again
   // Reset starting position
   // Activate keyboards

   // Apply move opponent function with the new interval (end game is within the moveOpponents function)
   moveOpponents()
   // If level three is completed, boolean won is true, unhide the won-game class, temporarily stop the keyboards from activating, and save the score to the local storage.
   endGame()
 }

 // End game function
 function endGame() {
   // If the game was ended by losing, boolean won is false and unhide the lost game class element
   // If the game was won at the end, boolean won is true unhide the won game class element
 }

 // Restart game function
 function restartGame() {
   // Return to select player
   selectPlayer()
   // Cleanup in case a previous interval is running
   // Clear timer interval
   // Reset the opponents
   // Reset the score
   // Reset lives
   // Reset current level
   // Reset interval
   // Reset starting position
   // Reset the hearts display
 }

 // * Player functions
 // Add player function
 function addPlayer() {

 }

 // Remove player function
 function removePlayer() {

 }

 // Move player function using add and remove player functions (only within the grids labeled 90 - 99)
 function movePlayer(e) {

 }

 // * Opponent functions
 // Add opponent function
 function addOpponent() {

 }


 // Remove opponent function
 function removeOpponent() {

 }

 // Move opponent function
 function moveOpponents() {
   timer = setInterval(() => {
     // A function that uses add and remove functions to automatically move the 11 opponent players (442 position, 3 rows) within the divs from the top to the bottom using interval times
     // If all of the cells aren't at the end column, move all of the cells to either left/right. When they are at the end column, move down. Repeat.
     // If the opponent reaches the end grid, end the game and save the score to the local storage
   }, interval)
 }

 // * Shooting the football functions
 // Add football function
 function addFootball() {

 }

 // Remove football function
 function removeFootball() {

 }

 // My player shoots the ball function
 function myShot() {
   // When the opponent grid cell is equal to the cell of the football I shot, remove the opponent player and add 10 points to the score
   // When the football grid cell is equal to the football that the opponent shot, remove both footballs
 }
// Opponent player shoots the ball function
 function opponentShot() {
    // Have a random the opponent shoot footballs every interval
       // When football is shot, change whatever cell it moves (+10 index) to the football using class list add and remove football functions

       // If lives is 0, end the game and save the score to the local storage
 }

 // ! Events
 // Select player
 playerContainer.addEventListener('click', selectPlayer)
 // When keydown is pressed, move the player (only when the grid is not hidden)
 document.addEventListener('keydown', movePlayer)
 // When keydown is pressed using shift, shoot the ball (only when the grid is not hidden)
 document.addEventListener('keydown', myShot)
 // When the "to the next level button" is pressed after level one, move to level two.
 toLevelTwo.addEventListener('click', levelTwo)
 // When the "to the next level button" is pressed, move to level three.
 toLevelThree.addEventListener('click', levelThree)
 // Restart Game
 restartButton.addEventListener('click', restartGame)
 // ! Page load
 createGrid()

window.addEventListener('DOMContentLoaded', init)
 ```

## Process
### DOM Elements
Elements were separated into 6 different types: enter game, left container (with the restart button, score, high score, lives, current level, and how to play), select player (and an array of these elements), entering the grid, different levels, and sound effects (with an array of all the sounds that will be used in the mute function).
```js
  // Enter game elements
  const startPage = document.querySelector('.start-page')
  const trophy = document.querySelector('.trophy')
  const gameContainer = document.querySelector('.container')
  
  // Left container elements
  const restartButton = document.querySelector('#restart')
  const scoreDisplay = document.querySelector('#current-score')
  const highScoreDisplay = document.querySelector('#high-score')
  const heartsDisplay = document.querySelector('#hearts')
  const currentLevelDisplay = document.querySelector('#current-level')
  
  // Select player display
  const selectPlayerDisplay = document.querySelector('.select-player')
  const playerContainer = document.querySelectorAll('.player-container')
  const rashford = document.querySelector('.rashford')
  const haaland = document.querySelector('.haaland')
  const kane = document.querySelector('.kane')
  const salah = document.querySelector('.salah')
  // Arrays used in player selection display (Not used the const variable here because the user has to click the div, image, or the player name to work)
  const playerSelection = [rashford, haaland, kane, salah]
  const playerSelectionString = ['rashford', 'haaland', 'kane', 'salah']
  
  // Entering the grid
  const enterLevelOne = document.querySelector('.enter-level-one')
  const grid = document.querySelector('.grid')
  
  // Different levels
  const wonLevelOne = document.querySelector('.won-level-one')
  const wonLevelTwo = document.querySelector('.won-level-two')
  const wonGame = document.querySelector('.won-game')
  const lostGame = document.querySelector('.lost-game')
  const toLevelTwoButton = document.querySelector('#to-level-two')
  const toLevelThreeButton = document.querySelector('#to-level-three')
  const gameOverChampions = document.querySelector('.champions')
  
  // Sound effects
  const soundButton = document.querySelector('.soundButton')
  const backgroundMusic = document.querySelector('.pl-anthem')
  backgroundMusic.volume = 0.1
  const click = document.querySelector('.click')
  const kick = document.querySelector('.kick')
  const whistle = document.querySelector('.whistle')
  const siu = document.querySelector('.siu')
  kick.volume = 0.2
  whistle.volume = 0.2
  siu.volume = 0.5
  const saintsChant = document.querySelector('.saints-chant')
  const toonsChant = document.querySelector('.toons-chant')
  const bluesChant = document.querySelector('.blues-chant')
  const champione = document.querySelector('.champione')
  toonsChant.volume = 0.1
  bluesChant.volume = 0.1
  champione.volume = 0.1
  // Sound effects array to mute all of these effects when clicked the mute button
  const soundEffects = [backgroundMusic, click, kick, whistle, siu, saintsChant, toonsChant, bluesChant, champione]
```

### Global Variables
- The game grid was set as 10 by 10.
- Starting position was cell index 94. The current position of the player (when the game starts) was set as the same as the starting position in the beginning.
- An empty cells array was created to add divs within when the grid is made.
- For the positions of the opponents, four arrays were set for the GK, defense, midfield, and attack, as each row had a different player image that was implemented. Then, these four arrays were combined into one. This array was used to stop the game when any of the players reached the bottom row of the grid, and to check whether to proceed to the next level when all of the opponents were removed.

  ```js
  // Width
  const width = 10

  // Total cells
  const cellCount = width * width

  // Starting position of the player
  const startingPosition = 94
  let currentPosition = startingPosition
  const cells = []

  // Array of player classes the will be added or removed in the grid
  const playerClassArray = ['rashfordPlayer', 'haalandPlayer', 'kanePlayer', 'salahPlayer']

  // Array of starting positions of the opponents
  // 4 different arrays that have different opponent images
  let opponentsGK = [2, 3, 4]
  let opponentsDef = [10, 11, 12, 13, 14, 15, 16]
  let opponentsMid = [20, 21, 22, 23, 24, 25, 26]
  let opponentsAtt = [31, 32, 33, 34, 35]
  // Total array of opponents that will be used later to prevent errors when the opponents move out of the grid and to check if all of the opponents were removed (then proceed to the next level)
  let totalOpponentArray = opponentsGK.concat(opponentsDef.concat(opponentsMid.concat(opponentsAtt)))
  ```

- Keycode variables (right and left to move / shift to shoot) were set globally.

  ```js
  // * Keyboard(keyCode) variables
  const right = 39
  const left = 37
  const space = 32
  ```

- Other variables include the beginning score, lives, and level of the player.

  ```js
  // Score
  let score = 0

  // Lives
  let lives = 3

  // Current level
  let level = 1
  ```

- Some intervals and related variables were also set globally. These included the interval of the opponents’ movements and its interval time (3 seconds), a variable that decreases the interval when progressing to the next level, an opponent shot interval that puts each shot that the opponents shoot in an interval and its movement time constant, and a timeout when entering the game.

  ```js
  // Opponent movement interval time span
  let intervalTime = 1000

  // Decrease time (used when levels up)
  const decreaseInterval = 150
    
  // Timer for the opponent's movement intervals
  let opponentMovements

  // Opponent shots interval
  let opponentShotInterval

  // Opponent shot movement time span
  const shotMovementTime = 300

  // Timeout for entering the game
  let enteringGame
  ```

- Booleans and its array was set to check whether which player was selected in player selection. An array of champions classes was also created, which will be used in the restartGame function to renew the gameOverChampions div.

  ```js
  // Rashford boolean
  let selectedRashford = false
    
  // Haaland boolean
  let selectedHaaland = false
    
  // Kane boolean
  let selectedKane = false
    
  // Salah boolean
  let selectedSalah = false
    
  // Player boolean array
  let selectedPlayerBoolean = [selectedRashford, selectedHaaland, selectedKane, selectedSalah]

  // Champions array (which will be used in the restartGame function to renew the gameOverChampions div)
  const championsArray = ['manutd-champions', 'mancity-champions', 'tottenham-champions', 'liverpool-champions']
  ```

- Lastly, a high score local storage was set to save the high score. If there exists a high score in the local storage, highScoreDisplay was set as the high score. If not, highScoreDisplay was set as zero.

  ```js
  // Retrieve the high score from local storageq
  const highScore = localStorage.getItem('highscore')
  if (highScore !== null) {
    highScoreDisplay.innerHTML = highScore
  } else {
    highScoreDisplay.innerHTML = 0
  }
  ```

### Start Page & Select Player
- In order to create a interactive beginning to the game, I created a start page by adding and removing the hidden class when clicked on the trophy.

  ```js
  function enterGame() {
    // Hide startPage and unhide gameContainer
    startPage.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    // Click button audio
    click.play()
    // Play background music
    backgroundMusic.play()
    backgroundMusic.loop = true
  }
  ```
- I changed the boolean of the selected player variable, which connects to the addPlayer function in changing the character of the player inside the game grid. The boolean is also used in the gameOverChampions to change the gif of the final won-game page with the player’s team holding the trophy. When one of the player-container classes is clicked, I added the clicked class to the clicked player-container, which made a click sound and the colours changed.

  ```js
  function selectPlayer(e) {
    // If a player is selected, change the colour of the container by adding a style class in CSS
    // Change the player boolean that is selected to true
    for (let i = 0; i < playerSelection.length; i++) {
      if (e.target.classList.contains(playerSelectionString[i])) {
        selectedPlayerBoolean[i] = true
        playerSelection[i].classList.add('clicked')
      }
    }
    // Remove the class of the previous player character's team that won the game in gameOverChampions and add the current player character's team in gameOverChampions div
    for (let i = 0; i < selectedPlayerBoolean.length; i++) {
      if (selectedPlayerBoolean[i] === true) {
        championsArray.forEach(team => {
          if (gameOverChampions.classList.contains(team)) {
            gameOverChampions.classList.remove(team)
          }
        })
        gameOverChampions.classList.add(championsArray[i])
      }
    }
    // Click button audio
    click.play()
    // Start the game a little bit after(0.3s) the player is selected
    setTimeout(() => startGame(), 300)
  }
  ```

### The Grid
- I have added a 10 by 10 grid by creating a cell array of 100 new divs. This was done by using the createElement in JavaScript and adding them to the grid element using appendChild and push within the for loop.
- Each cell was set an attribute of data-index i, that will be used later when tracking movements

  ```js
  function createGrid() {
    // Using the total cell count we've saved to a variable we're going to use a for loop to iterate that many times
    for (let i = 0; i < cellCount; i++) {
      // Create div
      const cell = document.createElement('div')
      // Data attribute represeting the index
      cell.setAttribute('data-index', i)
      // Append to grid
      grid.appendChild(cell)
      // Push cell into cells array
      cells.push(cell)
    }
  }
  ```

### Player
- Using the selected player boolean in the select player section before, I have altered the image of the footballer accordingly.
- The movePlayer function is run by using both the remove player and add player functions. I removed the player at the current position first. When clicked right, added the player +1 in the cells array and when clicked left, added the player -1 in the cells array. I put additional conditionals in order for the player to not move outside and into the other side of the set box.
- Finally, I added a conditional that says “if the grid isn’t hidden (the game play is on)”, which enables the movePlayer function to not work when the display shows different menus.

  ```js
  function addPlayer(position) {
    // The class of the player that is selected is added
    for (let i = 0; i < selectedPlayerBoolean.length; i++) {
      if (selectedPlayerBoolean[i] === true) {
        cells[position].classList.add(playerClassArray[i])
      }
    }
  }

  function removePlayer() {
    // The class of the player that is selected is removed
    for (let i = 0; i < selectedPlayerBoolean.length; i++) {
      if (selectedPlayerBoolean[i] === true) {
        cells[currentPosition].classList.remove(playerClassArray[i])
      }
    }
  }

  function movePlayer(e) {
    removePlayer()
    // Only move the player within the grids 90-99 and when there is the game grid in on display
    if (e.keyCode === right && currentPosition % width !== width - 1 && !grid.classList.contains('hidden')) {
      // Prevent the default arrow keys to work
      e.preventDefault()
      currentPosition++
    } else if (e.keyCode === left  && currentPosition % width !== 0 && !grid.classList.contains('hidden')) {
      // Prevent the default arrow keys to work
      e.preventDefault()
      currentPosition--
    }
    addPlayer(currentPosition)
  }
  ```

### Opponents
- When adding the opponent, I first checked the level of the game to add different opponent images, then created an interval to remove and add opponents within a set time to make them move.
- Each opponent can move the distance of ***width - opponentDef’s length***, which is the longest row within the opponents. A variable (movementLength) was set as the range that the opponents can move within the grid. I created four conditionals with an opponentMoved index that checks how many times the opponents moved and a boolean variable to check whether the movement is right or left. When the opponentMoved index is equal to the movementLength, I have altered the moveRight and moveLeft booleans and shifted the opponents to the bottom row by adding the width. I reset the opponentMoved index to 0 and then, subtract each of the numbers in the array to move left.
- The bottom of the grid is reached by putting a conditional within the conditional that allows the opponents to move to the bottom of the grid, which is when the opponents were moving left then bottom. If any of the opponents within the whole array of opponents reach the bottom row (>= cellCount - width), then the opponentMovements the display goes to endGameLost.

  ```js
  function moveOpponents() {
    // A function that uses add and remove player functions to automatically move the opponents within the cells using interval times
    // Variables that track the movement of the opponents
    let opponentMoved = 0
    let movesRight = true
    let movesLeft = false
    const movementLength = width - opponentsDef.length
    opponentMovements = setInterval(() => {
      // Set conditionals to check whether the movement is left or right. After the opponent group (each array of positions) moves movementLength(number), then move down. 
      removeOpponent()
      if (opponentMoved < movementLength && movesRight) {
        opponentsGK = opponentsGK.map(opponent => opponent + 1)
        opponentsDef = opponentsDef.map(opponent => opponent + 1)
        opponentsMid = opponentsMid.map(opponent => opponent + 1)
        opponentsAtt = opponentsAtt.map(opponent => opponent + 1)
        totalOpponentArray = totalOpponentArray.map(opponent => opponent + 1)
        opponentMoved += 1
      } else if (opponentMoved === movementLength && movesRight) {
        opponentsGK = opponentsGK.map(opponent => opponent + width)
        opponentsDef = opponentsDef.map(opponent => opponent + width)
        opponentsMid = opponentsMid.map(opponent => opponent + width)
        opponentsAtt = opponentsAtt.map(opponent => opponent + width)
        totalOpponentArray = totalOpponentArray.map(opponent => opponent + width)
        opponentMoved = 0
        movesRight = false
        movesLeft = true
      } else if (opponentMoved < movementLength && movesLeft) {
        opponentsGK = opponentsGK.map(opponent => opponent - 1)
        opponentsDef = opponentsDef.map(opponent => opponent - 1)
        opponentsMid = opponentsMid.map(opponent => opponent - 1)
        opponentsAtt = opponentsAtt.map(opponent => opponent - 1)
        totalOpponentArray = totalOpponentArray.map(opponent => opponent - 1)
        opponentMoved += 1
      } else if (opponentMoved === movementLength && movesLeft) {
        opponentsGK = opponentsGK.map(opponent => opponent + width)
        opponentsDef = opponentsDef.map(opponent => opponent + width)
        opponentsMid = opponentsMid.map(opponent => opponent + width)
        opponentsAtt = opponentsAtt.map(opponent => opponent + width)
        totalOpponentArray = totalOpponentArray.map(opponent => opponent + width)
        opponentMoved = 0
        movesRight = true
        movesLeft = false
        // When any of the opponents reaches the bottom of the grid, endGameLost.
        if (totalOpponentArray.some(opponent => opponent >= cellCount - width)) {
          endGameLost()
        }
      } 
      addOpponent()    
    }, intervalTime)
  }
  ```

### Player's Football Shots
- Similarly with the add and remove player method, the football is added and removed in order to make it fly across the grid. The position of each football shot is in the -10 position of the current position of the player, labelled as shotIndex. Each shot was set at a 0.3s interval to remove the football at the original position, decrease the shotIndex, and add the football to the cell above.
- For the collisions, I first removed the football when the ball reached the last top row.
- I needed to check all of the different opponent classes to see whether each cell that collides with the ball has a class of the opponent’s image and clear the shotMovement interval if it does to stop the shot from moving. I created a function(opponentRemover) that removes all the necessary actions and was implemented within the myShots function. 
- Within the opponentRemover function, the classes of the player and football at the index that the collision occurred were removed. Their corresponding indices within the opponents arrays were also deleted. A red card class and an audio was added to and removed within a timeout to show that the opponent was removed. The score was also incremented by 10 points. Lastly, the status checker was run to check if the totalOpponentArray’s length is zero, which means that all the opponents were removed.

  ```js
  function opponentRemover(opponentName, index, opponentArray) {
    // Remove my football and the opponent image
    removeFootball(index)
    cells[index].classList.remove(opponentName)
    // Add the red card and remove it when the timeout ends
    cells[index].classList.add('red-card')
    siu.play()
    const redCard = setTimeout(() => {
      cells[index].classList.remove('red-card')
    }, 300)
    // Remove the index of the opponent that was hit in the opponent arrays
    const opponentIndex = opponentArray.indexOf(index)
    opponentArray.splice(opponentIndex, 1)
    const totalOpponentIndex = totalOpponentArray.indexOf(index)
    totalOpponentArray.splice(totalOpponentIndex, 1)
    // Increment the score
    score += 10
    scoreDisplay.innerHTML = score
    // Status check every time an opponent is removed to see if the player can move to the next round
    if (totalOpponentArray.length === 0) {
      statusCheck()
    }
  }
  ```

- Another situation in which the interval had to be cleared was when the restart button was clicked or when the grid was hidden.
- Below is the code for the myShots function that handles all of the possible scenarios.

  ```js
  function myShot(e) {
    if (e.keyCode === space && !grid.classList.contains('hidden')) {
      // Prevent the default shift key to work
      e.preventDefault()
      // Sound effects
      kick.play()
      // Ball position at start (right above cell of the player image)
      let shotIndex = currentPosition - width 
      addFootball(shotIndex)
      // Shot remover function that will be used for each opponent character
      // Rather than declaring a global variable, the interval variable is declared locally.
      const shotMovement = setInterval(() => {
        // When the opponent grid cell is equal to the cell of the football I shot, remove the specific opponent player, the football, the shotIndex value within the four opponents array and add 10 points to the score
        // Remove football when reached the top row
        // Interval needs to be cleared when restart button was clicked or the grid is hidden
        if (shotIndex < width) {
          removeFootball(shotIndex)
        } else if (cells[shotIndex].classList.contains('banzunuOpponent')) {
          opponentRemover('banzunuOpponent', shotIndex, opponentsGK)
          clearInterval(shotMovement)
        }
        // Other oppenent conditionals here (removed in README due to lengthy code)
        else if (restartButton.addEventListener('click', restartGame) || grid.classList.contains('hidden')) {
          clearInterval(shotMovement)
        } else {
          removeFootball(shotIndex)
          shotIndex -= width
          addFootball(shotIndex)  
        }
      }, 300)
    }
  }
  ```

### Opponent's RANDOM football shots
- A random shot index was set randomly within the totalOpponentArray, using Math.floor(Math.random()). Similar to my football shots, an interval was set to make the opponent's football fly through the grid.

  ```js
  function opponentShots() {
    // Set a random variable that starts from a position + width of any one of the opponents
    let randomShotIndex = totalOpponentArray[Math.floor(Math.random() * totalOpponentArray.length)] + width
    // Have a random the opponent shoot footballs
    // If cell of the opponentFootball contains a player, change the image using setTimeout and remove the football and -1 a heart
    // If not continue to move on until the ball reaches the bottom row of the grid
    // This interval is the interval where the shot flies across the grid
    const opponentShotMovement = setInterval(() => {
      // Remove the football when reached the bottom row or when the grid is hid
      if (randomShotIndex >= cellCount) {
        removeOpponentFootball(randomShotIndex)
      } else if (cells[randomShotIndex].classList.contains('rashfordPlayer') || cells[randomShotIndex].classList.contains('haalandPlayer') || cells[randomShotIndex].classList.contains('kanePlayer') || cells[randomShotIndex].classList.contains('salahPlayer')) {
        playerRemover(randomShotIndex, opponentShotMovement)
      } else if (restartButton.addEventListener('click', restartGame) || grid.classList.contains('hidden')) {
        clearInterval(opponentShotMovement)
      } else {
        removeOpponentFootball(randomShotIndex)
        randomShotIndex += width
        addOpponentFootball(randomShotIndex)
      }
    }, shotMovementTime)
  }
  ```

- Within the interval, a player remover function was implemented to remove the necessary variables when hit with the opponent’s football. The opponent’s football is removed first, then a life(heart), and the score by 50 points. Within the function, it also checks whether the player has 0 lives, and if it does, it goes straight to the endGameLost function.

  ```js
    function playerRemover(index, interval) {
    removeOpponentFootball(index)
    // Show yellow card when hit with a football
    cells[index].classList.add('yellow-card')
    whistle.play()
    const yellowCard = setTimeout(() => {
      cells[index].classList.remove('yellow-card')
    }, 200)
    // Remove a life
    lives--
    heartsDisplay.innerHTML = '❤️'.repeat(lives)
    // Remove 50 points
    score -= 50
    scoreDisplay.innerHTML = score
    // Clear the interval set within the opponent shots function (which would be the const opponentShotMovement), so that the player doesn't die repeatedly
    clearInterval(interval)
    // If there are no lives left, clear the opponentShotInterval (the interval makes the opponents shoot every set interval time), show "game over" in heartsDisplay, and move to the endGameLost function
    if (lives === 0) {
      clearInterval(opponentShotInterval)
      heartsDisplay.innerHTML = 'GAME OVER'
      endGameLost()
    } 
  }
  ```

### Different Levels
- A status checker was implemented in the opponentRemover function, which set to run every time an opponent is removed (explained above). This function cleared and reset the intervals to null (to remove all the previously saved intervals) and gave the arrays their original value. It also removed all the classes inside each cell of the grid using the removeEverything function. It opened a wonLevelOne/Two class. When the toLevelTwo/Three button is clicked within the wonLevelOne/Two class, the user can move to the next level (levelTwo/Three functions) that has a grid with shorter intervals.

  ```js
  function statusCheck() {
    // Clear the interval and set the intervals back to null
    clearInterval(opponentMovements)
    opponentMovements = null
    clearInterval(opponentShotInterval)
    opponentShotInterval = null
    // Reset the arrays
    opponentsGK = [2, 3, 4]
    opponentsDef = [10, 11, 12, 13, 14, 15, 16]
    opponentsMid = [20, 21, 22, 23, 24, 25, 26]
    opponentsAtt = [31, 32, 33, 34, 35]
    totalOpponentArray = opponentsGK.concat(opponentsDef.concat(opponentsMid.concat(opponentsAtt)))
    // Remove every classes is added within the cells
    removeEverything()
    // Reset starting position
    currentPosition = startingPosition
    // Save the final score if it is the highest score
    highScoreChecker()
    // Conditionals to check to proceed to the wonLevel/wonGame classes
    if (level === 1) {
      // Show won level one
      grid.classList.add('hidden')
      wonLevelOne.classList.remove('hidden')
      // Stop audio
      saintsChant.pause()
      saintsChant.currentTime = 0
      // Play background music
      backgroundMusic.play()
      backgroundMusic.loop = true
    } else if (level === 2) {
      // Show won level two
      grid.classList.add('hidden')
      wonLevelTwo.classList.remove('hidden')
      // Stop audio
      toonsChant.pause()
      toonsChant.currentTime = 0
      // Play background music
      backgroundMusic.play()
      backgroundMusic.loop = true
    } else if (level === 3) {
      grid.classList.add('hidden')
      // Different champions gif with different selected players
      for (let i = 0; i < selectedPlayerBoolean.length; i++) {
        if (selectedPlayerBoolean[i] === true) {
          // Show won game
          wonGame.classList.remove('hidden')
          // Show the champions gif within the same index as the selectedPlayerBoolean array (manutd-rashford, mancity-haaland, tottenham-kane, salah-liverpool)
          gameOverChampions.classList.add(championsArray[i])
          // Pause audio
          bluesChant.pause()
          bluesChant.currentTime = 0
          // Play background music
          champione.play()
          champione.loop = true
        }
      }
    }
  }
  ```

### Restart function
- I have created a restart button and a function that clears all of the intervals and sets every variable back to normal, no matter what the display is. I have created a class to target specific displays and music to reset the display and pause and reset the music playing in the background.

  ```js
  function restartGame() {
    // Return to select player for each display
    if (!selectPlayerDisplay.classList.contains('hidden')) {
      selectPlayerDisplay.classList.add('hidden')
      selectPlayerDisplay.classList.remove('hidden')
    } else if (!enterLevelOne.classList.contains('hidden')) {
      // Clear enter game timeout
      clearTimeout(enteringGame)
      enteringGame = null
      enterLevelOne.classList.add('hidden')
      selectPlayerDisplay.classList.remove('hidden')
    } else if (!grid.classList.contains('hidden') && level === 1) {
      gridLevelOne.restart()
    } else if (!grid.classList.contains('hidden') && level === 2) {
      gridLevelTwo.restart()
    } else if (!grid.classList.contains('hidden') && level === 3) {
      gridLevelThree.restart()
    } else if (!lostGame.classList.contains('hidden')) {
      lostGameBGM.restart()
    } else if (!wonLevelOne.classList.contains('hidden')) {
      wonLevelOneBGM.restart()
    } else if (!wonLevelTwo.classList.contains('hidden')) {
      wonLevelTwoBGM.restart()
    } else if (!wonGame.classList.contains('hidden')) {
      wonGameBGM.restart()
    }
    // Remove clicked class from the select player containers using a for loop around the player selection array
    for (let i = 0; i < playerSelection.length; i++) {
      playerSelection[i].classList.remove('clicked')
    }
    // Remove all the classes in the grid
    removeEverything()
    // Reset individual selectedPlayer boolean
    selectedRashford = false
    selectedHaaland = false
    selectedKane = false
    selectedSalah = false
    // Reset the selectedPlayer boolean array
    selectedPlayerBoolean = [selectedRashford, selectedHaaland, selectedKane, selectedSalah]
    // Clear opponents and their movement/shot interval
    clearInterval(opponentMovements)
    opponentMovements = null
    clearInterval(opponentShotInterval)
    opponentShotInterval = null
    // Reset the arrays
    opponentsGK = [2, 3, 4]
    opponentsDef = [10, 11, 12, 13, 14, 15, 16]
    opponentsMid = [20, 21, 22, 23, 24, 25, 26]
    opponentsAtt = [31, 32, 33, 34, 35]
    totalOpponentArray = opponentsGK.concat(opponentsDef.concat(opponentsMid.concat(opponentsAtt)))
    // Reset the score
    score = 0
    scoreDisplay.innerHTML = score
    // Reset lives
    lives = 3
    // Reset the hearts display
    heartsDisplay.innerHTML = '❤️'.repeat(lives)
    // Reset current level
    level = 1
    currentLevelDisplay.innerHTML = level
    // Reset interval time
    intervalTime = 1000
    // Reset starting position
    currentPosition = startingPosition
    // Play background music
    backgroundMusic.play()
    // Click button audio
    click.play()
  }  
  ```

### Local Storage
- I have set a local storage of high scores to keep track of the highest score achieved.
- Every level, every time endGameLost, or when the game is won in level 3 (within the status checker), the highScoreChecker is run. The high score checker checks if the high score variable has a value. If it does, it checks whether the current score is greater than the saved high score and saves it if it is.

  ```js
  function highScoreChecker() {
    // Save the final score if it is the highest score
    if (highScore !== null) {
      if (score >= parseInt(highScore)) {
        localStorage.setItem('highscore', score)
        highScoreDisplay.innerHTML = score
      }
    } else {
      localStorage.setItem('highscore', score)
    }
  }
  ```

### Adding mute
- I added a mute function at the bottom right corner of the page so that the users can freely mute and unmute the audio.
- I have used an array and a for loop to loop inside the array, muting all of the sound effects.

  ```js
  function muteAudio() {
    if (soundButton.classList.contains('unmute')) {
      soundButton.classList.remove('unmute')
      soundButton.classList.add('mute')
      click.play()
      for (let i = 0; i < soundEffects.length; i++) {
        soundEffects[i].muted = true
      }
    } else if (soundButton.classList.contains('mute')) {
      soundButton.classList.remove('mute')
      soundButton.classList.add('unmute')
      for (let i = 0; i < soundEffects.length; i++) {
        soundEffects[i].muted = false
      }
      click.play()
    }
  }
  ```

## Challenges & Bugs
### Challenges
#### Player and opponent shot movement interval variable
- This interval variable was first set as a global variable. However, an error occurred with the football when it flew across the grid because within each setInterval, the variable created a new timer on the global variable, enabling it to execute multiple times when the ball was continuously shot. Therefore, I realised I needed to set the setInterval variable(shotMovement) within the function in order for it to create a unique interval every time. Functional scope is very important within these games as accessing them globally and locally might result in errors and bugs.

#### Moving to the next level
- After trial and error, I realised that the status checker needs to go inside the myShot function to continue checking the totalOpponentArray’s length to move on to the next level when the opponent is removed. Also, setting the intervals as null was crucial in that the saved intervals have to be renewed to deal with bugs.

#### Disabling keyboards when grid is hidden
- I have found an error that the keyboards work when the game grid is hidden. Therefore, within the functions that enable right, left, and space keyboard, I have added to the conditionals that it can only work when the grid class is not hidden.

#### Collision bugs
- Some bugs occurred because the footballs were not removed when the grid is hidden. Therefore, an extra remove football function was created to target all of the footballs that are left within the cells of the grid. The original remove football functions do not target this because it needs to input a position.

#### Setting and resetting intervals at the right position
- This was very confusing in the beginning in which position each interval should be and which of them need to be renewed at a certain time point to alleviate the bugs that might occur. I have realised that the reset needs to occur every time an action occurs.

### Bugs
- Due to the duration of each interval, it seems like when more than two intervals collide, sometimes the user cannot actually experience some events occur. Nonetheless, the whole function is functional.

## Wins and Takeaways
### Wins
- I am proud that I was able to create a fully-functional space invaders game with all of the football-themed styling and elements that I wanted to implement in the beginning.
- Although the pseudocode did not have some functions that I implemented as seen in the end product, I was able to divide some functions into two while refactoring, making it easier for them to access.
- Setting intervals in the right place and removing them at the right time was crucial in this game. Solving this problem and seeing an end product with minimum bugs was very satisfying.

### Takeaways
- I feel more confident in planning a project through wireframes and pseudocode because it really helped me shape my game. Also, they helped me find the exact position and function that needs to be fixed when I encountered a bug.
- I believe that I can now set timeouts and intervals at the correct position and clear them when necessary. Planning also helped me reorganise these intervals as I was able to find exactly where each action occurred.

## Future Improvements
- Although I planned prior to the project, I made numerous decision changes in between regards to functionality and styling. This hindered me in writing a short code as some variables would have been more effective when put in arrays, objects, and classes. I have made an effort at the end to accomplish this, but in the future, I would like to take these aspects into consideration while coding.
- I would like to add a function that removes both my football and the opponent’s football when they are hit.
- Finally, I would like to make my game responsive to various devices.
