function init() {

  // ! Elements
  // Enter game elements
  const startPage = document.querySelector('.start-page')
  const trophy = document.querySelector('.trophy')
  const gameContainer = document.querySelector('.container')
  const backgroundMusic = document.querySelector('.pl-anthem')

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
  const click = document.querySelector('.click')
  
  // Entering the game
  const gridWrapper = document.querySelector('.grid-wrapper')
  const enterLevelOne = document.querySelector('.enter-level-one')
  const grid = document.querySelector('.grid')

  // // Different levels
  // const wonLevelOne = document.querySelector('.won-level-one')
  // const wonLevelTwo = document.querySelector('.won-level-two')
  // const wonGame = document.querySelector('.won-game')
  // const lostGame = document.querySelector('.lost-game')
  // const toLevelTwo = document.querySelector('#to-level-two')
  // const toLevelThree = document.querySelector('#to-level-two')
  // const gameOverChampions = document.querySelector('.champions')

  // Chants audio
  const saintsChant = document.querySelector('.saints-chant')

  // ! Variables
  // * Grid variables
  // Width
  const width = 10

  // Total cells
  const cellCount = width * width

  // Starting position of the player
  const startingPosition = 94
  let currentPosition = startingPosition
  const cells = []

  // Starting positions of the opponents
  // 4 different arrays that have different opponent images
  let gkOpponent = 3
  let opponentsDef = [10, 11, 12, 13, 14, 15, 16]
  let opponentsMid = [20, 21, 22, 23, 24, 25, 26]
  let opponentsAtt = [31, 32, 33, 34, 35]
  // // Total array of opponents that will be used later to prevent errors when the opponents move out of the grid
  // let totalOpponentArray = gkOpponent.concat(opponentsDef.concat(opponentsMid.concat(opponentsAtt)))

  // * Keyboard(keyCode) variables
  const right = 39
  const left = 37
  const space = 32

  // * Other variables
  // Score
  let score = 0

  // // Lives
  // let lives = 3

  // Current level
  const level = 1

  // Opponent movement interval
  const interval = 1000

  // // Decrease time (used when levels up)
  // const decreaseTime = 200

  // Timer for the opponent's movement intervals
  let opponentMovements

  // Shot movement interval timer
  let shotMovement

  // Won boolean
  let won = true

  // Rashford boolean
  let selectedRashford = false

  // Haaland boolean
  let selectedHaaland = false

  // Kane boolean
  let selectedKane = false

  // Salah boolean
  let selectedSalah = false



  // ! Executions
  // Enter the game function
  function enterGame(e) {
    // Hide and unhide div classes
    startPage.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    // Click button audio
    click.play()
    // Play background music
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
    backgroundMusic.loop = true
  }

  // Select player function
  function selectPlayer(e) {
    // If a player is selected, change the image of the player by adding a style class in CSS
    // Remove the other players div containers and enlarge the selected player by adding a class/transition
    // Change the player boolean that is selected to true
    if (e.target.classList.contains('rashford')) {
      selectedRashford = true
      rashford.classList.add('clicked')
    } else if (e.target.classList.contains('haaland')) {
      selectedHaaland = true
      haaland.classList.add('clicked')
    } else if (e.target.classList.contains('kane')) {
      selectedKane = true
      kane.classList.add('clicked')
    } else if (e.target.classList.contains('salah')) {
      selectedSalah = true
      salah.classList.add('clicked')
    }
    // Click button audio
    click.play()
    // Start the game 2-3 seconds after after the player is selected
    setTimeout(() => startGame(), 100)
  }


  // Create the pitch grid
  function createGrid() {
    // Using the total cell count we've saved to a variable we're going to use a for loop to iterate that many times
    for (let i = 0; i < cellCount; i++) {
      // Create div
      const cell = document.createElement('div')

      // Add index as innerText
      cell.innerHTML = i

      // Data attribute represeting the index
      cell.setAttribute('data-index', i)

      // Append to grid
      grid.appendChild(cell)

      // Push cell into cells array
      cells.push(cell)
    }
  }


  // Start game function
  function startGame() {
    // Reset the variables back to default values
    // restartGame()
    // Hide the select player class
    selectPlayerDisplay.classList.add('hidden')
    // Unhide enter-level-one class and give an interval of 2 seconds and unhide grid class
    enterLevelOne.classList.remove('hidden')
    setTimeout(() => {
      // Pause background music
      backgroundMusic.pause()
      backgroundMusic.currentTime = 0
      enterLevelOne.classList.add('hidden')
      grid.classList.remove('hidden')
      addPlayer(startingPosition)
      // Start Saints chant
      saintsChant.play()
      saintsChant.volume = 0.1
      saintsChant.loop = true
      // Add opponents
      addOpponent()
      // Move the opponents ('end game if the player dies' is within the moveOpponents function)
      moveOpponents()
    }, 3000)

    // If let opponents is zero in level one, unhide the won-level-one div class, temporarily stop the keyboards from activating, and hide the grid.
  }

  // // Level two function
  // function levelTwo() {
  //   // Set the current level display inner HTML as 2
  //   level = 2
  //   currentLevelDisplay.innerHTML = level
  //   // Reset opponent number
  //   opponents = 11
  //   // Interval is shortened
  //   interval -= decreaseTime
  //   // Reset starting position
  //   currentPosition = startingPosition
  //   // Unhide level-two class

  //   // Apply move opponent function with the new interval (end game is within the moveOpponents function)
  //   moveOpponents()
  //   // If let opponents is zero in level two, unhide the won-level-two div class, temporarily stop the keyboards from activating, hide the grid.
  // }

  // // Level three function
  // function levelThree() {
  //   // Set the current level display inner HTML as 3
  //   level = 3
  //   currentLevelDisplay.innerHTML = level
  //   // Reset opponent number
  //   opponents = 11
  //   // Interval is shortened again
  //   interval -= (decreaseTime) * 2
  //   // Reset starting position
  //   currentPosition = startingPosition
  //   // Unhide level-three class

  //   // Apply move opponent function with the new interval (end game is within the moveOpponents function)
  //   moveOpponents()
  //   // If level three is completed, boolean won is true, unhide the won-game class, temporarily stop the keyboards from activating, and save the score to the local storage.
  //   endGame()
  // }

  // End game function
  function endGame() {
    // If the game was ended by losing, boolean won is false and unhide the lost game class element
    // If the game was won at the end, boolean won is true unhide the won game class element
    clearInterval(opponentMovements)
    console.log('End Game')
  }

  // // Restart game function
  // function restartGame() {
  //   // Return to select player
  //   selectPlayer()
  //   // Cleanup in case a previous interval is running
  //   // Clear timer interval
  //   clearInterval(timer)
  //   // Reset the opponents
  //   opponents = 11
  //   // Reset the score
  //   score = 0
  //   // Reset lives
  //   lives = 3
  //   // Reset current level
  //   level = 1
  //   currentLevelDisplay.innerHTML = level
  //   // Reset interval
  //   interval = 1000
  //   // Reset starting position
  //   currentPosition = startingPosition
  //   // Reset the hearts display
  //   heartsDisplay.innerHTML = '❤️'.repeat(lives)
  //   Reset song
  // // Click button audio
  //   click.play()
  // }
  

  // * Player functions
  // Add player function
  function addPlayer(position) {
    // The class of the player that is selected is added
    if (selectedRashford === true) {
      cells[position].classList.add('rashfordPlayer')
    } else if (selectedHaaland === true) {
      cells[position].classList.add('haalandPlayer')
    } else if (selectedKane === true) {
      cells[position].classList.add('kanePlayer')
    } else if (selectedSalah === true) {
      cells[position].classList.add('salahPlayer')
    }
  }

  // Remove player function
  function removePlayer() {
    // The class of the player that is selected is added
    if (selectedRashford === true) {
      cells[currentPosition].classList.remove('rashfordPlayer')
    } else if (selectedHaaland === true) {
      cells[currentPosition].classList.remove('haalandPlayer')
    } else if (selectedKane === true) {
      cells[currentPosition].classList.remove('kanePlayer')
    } else if (selectedSalah === true) {
      cells[currentPosition].classList.remove('salahPlayer')
    }
  }

  // Move player function using add and remove player functions (only within the grids labeled 90 - 99)
  function movePlayer(e) {
    removePlayer()
    // Console logging arrows with their keyCodes
    if (e.keyCode === right && currentPosition % width !== width - 1) {
      currentPosition++
    } else if (e.keyCode === left  && currentPosition % width !== 0) {
      currentPosition--
    }
    addPlayer(currentPosition)
  }


  // * Opponent functions
  // Add opponent function
  function addOpponent() {
    // Add three different types of opponent images in three different levels
    if (level === 1) {
      cells[gkOpponent].classList.add('banzunuOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.add('bednarekOpponent', 'opponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('jwpOpponent', 'opponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('cheOpponent', 'opponent'))
    } else if (level === 2) {
      cells[gkOpponent].classList.add('popeOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.add('trippierOpponent', 'opponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('brunoOpponent', 'opponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('wilsonOpponent', 'opponent'))
    } else if (level === 3) {
      cells[gkOpponent].classList.add('kepaOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.add('jamesOpponent', 'opponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('mountOpponent', 'opponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('kaiOpponent', 'opponent'))
    }
  }

  // Remove opponent function
  function removeOpponent() {
    // Remove three different types of opponent images in three different levels
    if (level === 1) {
      cells[gkOpponent].classList.remove('banzunuOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.remove('bednarekOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.remove('jwpOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.remove('cheOpponent'))
    } else if (level === 2) {
      cells[gkOpponent].classList.remove('popeOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.remove('trippierOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.remove('brunoOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.remove('wilsonOpponent'))
    } else if (level === 3) {
      cells[gkOpponent].classList.remove('kepaOpponent', 'opponent')
      opponentsDef.forEach(opponents => cells[opponents].classList.remove('jamesOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.remove('mountOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.remove('kaiOpponent'))
    }
  }

  // Move opponent function
  function moveOpponents() {
    // A function that uses add and remove functions to automatically move the opponents within the divs from the top to the bottom using interval times
    // Variables that track the movement of the opponents
    let opponentMoved = 0
    let movesRight = true
    let movesLeft = false
    const movementLength = width - opponentsDef.length
    opponentMovements = setInterval(() => {
      // If all of the cells are valid, move all of the cells to right then left and repeat. When not valid, move down. Switch to the left. (For loop)
      removeOpponent()
      if (opponentMoved < movementLength && movesRight) {
        gkOpponent = gkOpponent + 1
        opponentsDef = opponentsDef.map(opponent => opponent + 1)
        opponentsMid = opponentsMid.map(opponent => opponent + 1)
        opponentsAtt = opponentsAtt.map(opponent => opponent + 1)
        // totalOpponentArray = totalOpponentArray.map(opponent => opponent + 1)
        opponentMoved += 1
      } else if (opponentMoved === movementLength && movesRight) {
        gkOpponent = gkOpponent + width
        opponentsDef = opponentsDef.map(opponent => opponent + width)
        opponentsMid = opponentsMid.map(opponent => opponent + width)
        opponentsAtt = opponentsAtt.map(opponent => opponent + width)
        // totalOpponentArray = totalOpponentArray.map(opponent => opponent + width)
        opponentMoved = 0
        movesRight = false
        movesLeft = true
      } else if (opponentMoved < movementLength && movesLeft) {
        gkOpponent = gkOpponent - 1
        opponentsDef = opponentsDef.map(opponent => opponent - 1)
        opponentsMid = opponentsMid.map(opponent => opponent - 1)
        opponentsAtt = opponentsAtt.map(opponent => opponent - 1)
        // totalOpponentArray = totalOpponentArray.map(opponent => opponent - 1)
        opponentMoved += 1
      } else if (opponentMoved === movementLength && movesLeft) {
        gkOpponent = gkOpponent + width
        opponentsDef = opponentsDef.map(opponent => opponent + width)
        opponentsMid = opponentsMid.map(opponent => opponent + width)
        opponentsAtt = opponentsAtt.map(opponent => opponent + width)
        // totalOpponentArray = totalOpponentArray.map(opponent => opponent + width)
        opponentMoved = 0
        movesRight = true
        movesLeft = false
        // Added the game over function here because this conditional is point that the opponents reaches the bottom of the grid
        if (opponentsAtt.includes(cellCount - width + 3)) {
          won = false
          endGame()
        }
      }

      addOpponent()    
    
      // // Have a random the opponent shoot footballs every interval
      //   // When football is shot, change whatever cell it moves (+10 index) to the football using class list add and remove football functions
      //   // If the player is in the same cell as the football, remove a life and add the hit player CSS style class to the cell's current position
      //   // If lives is 0, end the game and save the score to the local storage
      //   if (lives === 0) {
      //     won = false
      //     endGame()
      //   }
      //   // If the opponent reaches the end grid, end the game and save the score to the local storage
    }, interval)
  }


  // * Shooting the football functions
  // Add football function
  function addFootball(position) {
    if (position >= 0) {
      cells[position].classList.add('football')
    }
  }

  // Remove football function
  function removeFootball(position) {
    if (position >= 0) {
      cells[position].classList.remove('football')
    }
  }

  // My player shoots the ball function
  function myShot(e) {
    if (e.keyCode === space ) {
      e.preventDefault()
      // Ball position at start (right above cell of the player image)
      let shotIndex = currentPosition - width 
      addFootball(shotIndex)
      shotMovement = setInterval(() => {
        // When the opponent grid cell is equal to the cell of the football I shot, remove the opponent player, the football, the shotIndex value within the four opponents array and add 10 points to the score
        if (cells[shotIndex].classList.contains('opponent') && shotIndex >= 0) {
          if (gkOpponent === shotIndex) {
            if (level === 1) {
              cells[shotIndex].classList.remove('opponent', 'banzunuOpponent', 'football')
              gkOpponent = null
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 2) {
              cells[shotIndex].classList.remove('popeOpponent', 'football')
              gkOpponent = null
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 3) {
              cells[shotIndex].classList.remove('kepaOpponent', 'football')
              gkOpponent = null
              // totalOpponentArray.splice(opponentIndex, 1)
            }
          } else if (opponentsDef.includes(shotIndex)) {
            if (level === 1) {
              cells[shotIndex].classList.remove('opponent', 'bednarekOpponent', 'football')
              const opponentIndex = opponentsDef.indexOf(shotIndex)
              opponentsDef.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 2) {
              cells[shotIndex].classList.add('trippierOpponent', 'football')
              const opponentIndex = opponentsDef.indexOf(shotIndex)
              opponentsDef.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 3) {
              cells[shotIndex].classList.remove('jamesOpponent', 'football')
              const opponentIndex = opponentsDef.indexOf(shotIndex)
              opponentsDef.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            }
          } else if (opponentsMid.includes(shotIndex)) {
            if (level === 1) {
              cells[shotIndex].classList.remove('opponent', 'jwpOpponent', 'football')
              const opponentIndex = opponentsMid.indexOf(shotIndex)
              opponentsMid.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 2) {
              cells[shotIndex].classList.remove('brunoOpponent', 'football')
              const opponentIndex = opponentsMid.indexOf(shotIndex)
              opponentsMid.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 3) {
              cells[shotIndex].classList.remove('mountOpponent', 'football')
              const opponentIndex = opponentsMid.indexOf(shotIndex)
              opponentsMid.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            }
          } else if (opponentsAtt.includes(shotIndex)) {
            if (level === 1) {
              cells[shotIndex].classList.remove('opponent', 'cheOpponent', 'football')
              const opponentIndex = opponentsAtt.indexOf(shotIndex)
              opponentsAtt.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 2) {
              cells[shotIndex].classList.remove('wilsonOpponent', 'football')
              const opponentIndex = opponentsAtt.indexOf(shotIndex)
              opponentsAtt.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            } else if (level === 3) {
              cells[shotIndex].classList.remove('kaiOpponent', 'football')
              const opponentIndex = opponentsAtt.indexOf(shotIndex)
              opponentsAtt.splice(opponentIndex, 1)
              // totalOpponentArray.splice(opponentIndex, 1)
            }
          }
          score += 10
          scoreDisplay.innerHTML = score
          clearInterval(shotMovement)
        } else if (shotIndex >= 0) {
          // Flying shots
          removeFootball(shotIndex)
          shotIndex -= width
          addFootball(shotIndex)
        }
      }, 300)
    }
    // When the footblal grid cell is equal to the football that the opponent shot, remove both footballs
  }



  // ! Events
  // Enter game
  trophy.addEventListener('click', enterGame)
  // Select player
  playerContainer.forEach(player => player.addEventListener('click', selectPlayer))
  // When keydown is pressed, move the player (only when the grid is not hidden)
  document.addEventListener('keydown', movePlayer)
  // When keydown is pressed using space, shoot the ball (only when the grid is not hidden)
  document.addEventListener('keydown', myShot)
  // // When the "to the next level button" is pressed after level one, move to level two.
  // toLevelTwo.addEventListener('click', levelTwo)
  // // When the "to the next level button" is pressed, move to level three.
  // toLevelThree.addEventListener('click', levelThree)
  // // Restart Game
  // restartButton.addEventListener('click', restartGame)
  
  // ! Page load
  createGrid()
}

window.addEventListener('DOMContentLoaded', init)
