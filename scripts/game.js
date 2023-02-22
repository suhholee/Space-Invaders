function init() {

  // ! Elements

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
  const playerSelection = [rashford, haaland, kane, salah]
  
  // Entering the game
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
  let opponentsGK = [2, 3, 4]
  let opponentsDef = [10, 11, 12, 13, 14, 15, 16]
  let opponentsMid = [20, 21, 22, 23, 24, 25, 26]
  let opponentsAtt = [31, 32, 33, 34, 35]

  // Total array of opponents that will be used later to prevent errors when the opponents move out of the grid and to check if all of the opponents were removed (then proceed to the next level)
  let totalOpponentArray = opponentsGK.concat(opponentsDef.concat(opponentsMid.concat(opponentsAtt)))


  // * Keyboard(keyCode) variables

  const right = 39
  const left = 37
  const space = 32


  // * Other variables
  // Score
  let score = 0

  // Lives
  let lives = 3

  // Current level
  let level = 1

  // Opponent movement interval
  let interval = 1000

  // Decrease time (used when levels up)
  const decreaseInterval = 100

  // Opponent shots interval
  let opponentShotInterval

  // Opponent shot movement time
  const shotMovementTime = 300

  // Timeout for entering the game
  let enteringGame

  // Timer for the opponent's movement intervals
  let opponentMovements

  // Rashford boolean
  let selectedRashford = false

  // Haaland boolean
  let selectedHaaland = false

  // Kane boolean
  let selectedKane = false

  // Salah boolean
  let selectedSalah = false

  // Retrieve the high score from local storage
  const highScore = localStorage.getItem('highscore')
  if (highScore !== null) {
    highScoreDisplay.innerHTML = highScore
  } else {
    highScoreDisplay.innerHTML = 0
  }
  console.log(highScore)




  // ! Executions

  // * Create the pitch grid
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
    if (e.keyCode === right && currentPosition % width !== width - 1 && !grid.classList.contains('hidden')) {
      e.preventDefault()
      currentPosition++
    } else if (e.keyCode === left  && currentPosition % width !== 0 && !grid.classList.contains('hidden')) {
      e.preventDefault()
      currentPosition--
    }
    addPlayer(currentPosition)
  }


  // * Opponent functions

  // Add opponent function
  function addOpponent() {
    // Add three different types of opponent images in three different levels
    if (level === 1) {
      opponentsGK.forEach(opponents => cells[opponents].classList.add('banzunuOpponent'))
      opponentsDef.forEach(opponents => cells[opponents].classList.add('bednarekOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('jwpOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('cheOpponent'))
    } else if (level === 2) {
      opponentsGK.forEach(opponents => cells[opponents].classList.add('popeOpponent'))
      opponentsDef.forEach(opponents => cells[opponents].classList.add('trippierOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('brunoOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('wilsonOpponent'))
    } else if (level === 3) {
      opponentsGK.forEach(opponents => cells[opponents].classList.add('kepaOpponent'))
      opponentsDef.forEach(opponents => cells[opponents].classList.add('jamesOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.add('mountOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.add('kaiOpponent'))
    }
  }

  // Remove opponent function
  function removeOpponent() {
    // Remove four different types of opponent images in three different levels
    if (level === 1) {
      opponentsGK.forEach(opponents => cells[opponents].classList.remove('banzunuOpponent'))
      opponentsDef.forEach(opponents => cells[opponents].classList.remove('bednarekOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.remove('jwpOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.remove('cheOpponent'))
    } else if (level === 2) {
      opponentsGK.forEach(opponents => cells[opponents].classList.remove('popeOpponent'))
      opponentsDef.forEach(opponents => cells[opponents].classList.remove('trippierOpponent'))
      opponentsMid.forEach(opponents => cells[opponents].classList.remove('brunoOpponent'))
      opponentsAtt.forEach(opponents => cells[opponents].classList.remove('wilsonOpponent'))
    } else if (level === 3) {
      opponentsGK.forEach(opponents => cells[opponents].classList.remove('kepaOpponent'))
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
    const movementLength = width - ((totalOpponentArray.length - (opponentsGK.length + opponentsAtt.length)) / 2)
    opponentMovements = setInterval(() => {
      // Set conditionals to check whether the movement is left or right. After a certain duration of movement, 
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
        // Added the game over function here because this conditional is the point that the opponents reaches the bottom of the grid
        if (totalOpponentArray.some(opponent => opponent >= cellCount - width)) {
          endGameLost()
        }
      } 
      addOpponent()    
    }, interval)
  }


  // * Shooting the football functions

  // Add my football function
  function addFootball(position) {
    if (position >= 0) {
      cells[position].classList.add('football')
    }
  }

  // Remove my football function
  function removeFootball(position) {
    if (position >= 0) {
      cells[position].classList.remove('football')
    }
  }

  // Opponent remover function that will be used within the myShot function when checking whether my football shot hit the opponent
  function opponentRemover(opponentName, index, opponentArray) {
    // Remove the football and the opponent image
    removeFootball(index)
    cells[index].classList.remove(opponentName)
    // Add the red card until the interval ends
    cells[index].classList.add('red-card')
    siu.play()
    const redCard = setTimeout(() => {
      cells[index].classList.remove('red-card')
    }, 300)
    // Remove the index of the opponent that was hit in the arrays
    const opponentIndex = opponentArray.indexOf(index)
    opponentArray.splice(opponentIndex, 1)
    const totalOpponentIndex = totalOpponentArray.indexOf(index)
    totalOpponentArray.splice(totalOpponentIndex, 1)
    // Increment the score
    score += 10
    scoreDisplay.innerHTML = score
  }

  // My player shoots the ball function
  function myShot(e) {
    if (e.keyCode === space && !grid.classList.contains('hidden')) {
      e.preventDefault()
      // Sound effects
      kick.play()
      // Ball position at start (right above cell of the player image)
      let shotIndex = currentPosition - width 
      addFootball(shotIndex)
      // Shot remover function that will be used for each character
      // Rather than declaring a global variable, the interval variable is declared here.
      const shotMovement = setInterval(() => {
        // When the opponent grid cell is equal to the cell of the football I shot, remove the specific opponent player, the football, the shotIndex value within the four opponents array and add 10 points to the score
        // Remove football when reached the top row
        if (shotIndex < width) {
          removeFootball(shotIndex)
        } else if (cells[shotIndex].classList.contains('banzunuOpponent')) {
          opponentRemover('banzunuOpponent', shotIndex, opponentsGK)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('bednarekOpponent')) {
          opponentRemover('bednarekOpponent', shotIndex, opponentsDef)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('jwpOpponent')) {
          opponentRemover('jwpOpponent', shotIndex, opponentsMid)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('cheOpponent')) {
          opponentRemover('cheOpponent', shotIndex, opponentsAtt)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('popeOpponent')) {
          opponentRemover('popeOpponent', shotIndex, opponentsGK)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('trippierOpponent')) {
          opponentRemover('trippierOpponent', shotIndex, opponentsDef)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('brunoOpponent')) {
          opponentRemover('brunoOpponent', shotIndex, opponentsMid)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('wilsonOpponent')) {
          opponentRemover('wilsonOpponent', shotIndex, opponentsAtt)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('kepaOpponent')) {
          opponentRemover('kepaOpponent', shotIndex, opponentsGK)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('jamesOpponent')) {
          opponentRemover('jamesOpponent', shotIndex, opponentsDef)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('mountOpponent')) {
          opponentRemover('mountOpponent', shotIndex, opponentsMid)
          clearInterval(shotMovement)
        } else if (cells[shotIndex].classList.contains('kaiOpponent')) {
          opponentRemover('kaiOpponent', shotIndex, opponentsAtt)
          clearInterval(shotMovement)
        } else if (restartButton.addEventListener('click', restartGame)) {
          clearInterval(shotMovement)
        } else {
          removeFootball(shotIndex)
          shotIndex -= width
          addFootball(shotIndex)  
        }
      }, 300)
    }
    // When the football grid cell is equal to the football that the opponent shot, remove both footballs
  }

  // Add opponent football function
  function addOpponentFootball(position) {
    if (position < cellCount) {
      cells[position].classList.add('opponent-football')
    }
  }

  // Remove opponent football function
  function removeOpponentFootball(position) {
    if (position < cellCount) {
      cells[position].classList.remove('opponent-football')
    }
  }

  // Player remover function that is used within the opponentShots function to remove the player when hit with the opponent's football
  function playerRemover(index, interval) {
    removeOpponentFootball(index)
    whistle.play()
    lives--
    heartsDisplay.innerHTML = '❤️'.repeat(lives)
    score -= 50
    scoreDisplay.innerHTML = score
    clearInterval(interval)
    if (lives === 0) {
      clearInterval(opponentShotInterval)
      clearInterval(interval)
      heartsDisplay.innerHTML = 'GAME OVER'
      endGameLost()
    }
  }
  
  // Opponent shoots the ball function
  function opponentShots() {
    // Set a random variable that starts from a position + width of any one of the opponents
    let randomShotIndex = totalOpponentArray[Math.floor(Math.random() * totalOpponentArray.length)] + width
    // Have a random the opponent shoot footballs every interval
    // If cell of the opponentFootball contains a player, change the image using setTimeout and remove the football and -1 a heart
    // If lives is 0, then clear the interval and end the game as lost
    // If not continue to move on until the ball reaches the bottom row of the grid
    const opponentShotMovement = setInterval(() => {
      // Remove the football when reached the bottom row or when the grid is hid
      if (randomShotIndex >= cellCount) {
        removeOpponentFootball(randomShotIndex)
      } else if (cells[randomShotIndex].classList.contains('rashfordPlayer') || cells[randomShotIndex].classList.contains('haalandPlayer') || cells[randomShotIndex].classList.contains('kanePlayer') || cells[randomShotIndex].classList.contains('salahPlayer')) {
        playerRemover(randomShotIndex, opponentShotMovement)
      } else if (restartButton.addEventListener('click', restartGame)) {
        clearInterval(opponentShotMovement)
      } else {
        removeOpponentFootball(randomShotIndex)
        randomShotIndex += width
        addOpponentFootball(randomShotIndex)
      }
    }, shotMovementTime)
  }


  // * High score check function

  // High score checker
  function highScoreChecker() {
    // Save the final score if it is the highest score
    if (highScore !== null) {
      if (score >= parseInt(highScore)) {
        localStorage.setItem('highscore', highScore)
        highScoreDisplay.innerHTML = score
      }
      // else if (parseInt(highScore) === 0 && score < 0) {
      //   localStorage.setItem('highscore', score)
      // }
    } else {
      localStorage.setItem('highscore', score)
    }
    console.log(highScore)
  }

  // * Remove all the elements in the grid function

  // Remove all the footballs function (different with football position)
  function removeAllFootball() {
    cells.forEach(cell => {
      if (cell.classList.contains('football')) {
        removeFootball(cell.getIndex())
      } else if (cell.classList.contains('oppponent-football')) {
        removeOpponentFootball(cell.getIndex)
      }
    })
  }
  // Remove everything funciton (but without the opponents because opponents will all be removed except when the game is lost)
  function removeEverything() {
    removePlayer()
    removeAllFootball()
  }



  // * Game functions in order

  // Enter the game function
  function enterGame() {
    // Hide and unhide div classes
    startPage.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    // Click button audio
    click.play()
    // Play background music
    backgroundMusic.play()
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
    // Start the game a little bit after after the player is selected
    setTimeout(() => startGame(), 300)
  }

  // Status checker that occurs every time the opponents are all removed
  function statusCheck() {
    // Remove all the elements in the array and clear the interval
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
    // Proceed to the wonLevel/wonGame classes
    if (level === 1) {
      grid.classList.add('hidden')
      wonLevelOne.classList.remove('hidden')
      saintsChant.pause()
      saintsChant.currentTime = 0
      backgroundMusic.play()
      backgroundMusic.loop = true
      // Remove everything is added here because the elements need to be removed when the grid is hidden
      removeEverything()
      // Save the final score if it is the highest score
      highScoreChecker()
    } else if (level === 2) {
      grid.classList.add('hidden')
      wonLevelTwo.classList.remove('hidden')
      toonsChant.pause()
      toonsChant.currentTime = 0
      backgroundMusic.play()
      backgroundMusic.loop = true
      // Remove everything is added here because the elements need to be removed when the grid is hidden
      removeEverything()
      // Save the final score if it is the highest score
      highScoreChecker()
    } else if (level === 3) {
      grid.classList.add('hidden')
      // Different champions gif with different selected players
      if (selectedRashford === true) {
        wonGame.classList.remove('hidden')
        gameOverChampions.classList.add('manutd-champions')
        bluesChant.pause()
        champione.play()
        champione.loop = true
        // Remove everything is added here because the elements need to be removed when the grid is hidden
        removeEverything()
      } else if (selectedHaaland === true) {
        wonGame.classList.remove('hidden')
        gameOverChampions.classList.add('mancity-champions')
        bluesChant.pause()
        champione.play()
        champione.loop = true
        // Remove everything is added here because the elements need to be removed when the grid is hidden
        removeEverything()
      } else if (selectedKane === true) {
        wonGame.classList.remove('hidden')
        gameOverChampions.classList.add('tottenham-champions')
        bluesChant.pause()
        champione.play()
        champione.loop = true
        // Remove everything is added here because the elements need to be removed when the grid is hidden
        removeEverything()
      } else if (selectedKane === true) {
        wonGame.classList.remove('hidden')
        gameOverChampions.classList.add('liverpool-champions')
        bluesChant.pause()
        champione.play()
        champione.loop = true
        // Remove everything is added here because the elements need to be removed when the grid is hidden
        removeEverything()
      }
      // Save the final score if it is the highest score
      highScoreChecker()
    }
  }

  // Start game function
  function startGame() {
    // Hide the select player class
    selectPlayerDisplay.classList.add('hidden')
    // Unhide enter-level-one class and give an interval of 2 seconds and unhide grid class
    enterLevelOne.classList.remove('hidden')
    enteringGame = setTimeout(() => {
      // Pause background music
      backgroundMusic.pause()
      backgroundMusic.currentTime = 0
      // Start Saints chant
      saintsChant.play()
      saintsChant.volume = 0.1
      saintsChant.loop = true
      // Enter the grid
      enterLevelOne.classList.add('hidden')
      grid.classList.remove('hidden')
      addPlayer(startingPosition)
      // Add opponents the total array of opponents
      addOpponent()
      // Move the opponents ('end game if the player dies' is within the moveOpponents function)
      moveOpponents()
      // Apply the random football shots function in here
      opponentShotInterval = setInterval(() => {
        if (totalOpponentArray.length === 0) {
          statusCheck()
        }
        opponentShots()
        // If let opponents is zero in level one, unhide the won-level-one div class, temporarily stop the keyboards from activating, and hide the grid.
      }, 1500)
    }, 3000)
  }

  // Level two function
  function levelTwo() {
    // Background chant changed
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    toonsChant.play()
    toonsChant.loop = true
    // Set the current level display inner HTML as 2
    level = 2
    currentLevelDisplay.innerHTML = level
    // Interval is shortened
    interval -= decreaseInterval
    // Reset starting position
    currentPosition = startingPosition
    // Enter the grid
    wonLevelOne.classList.add('hidden')
    grid.classList.remove('hidden')
    // Add player
    addPlayer(currentPosition)
    // Add opponents the total array of opponents
    addOpponent()
    // Apply move opponent function with the new interval (end game is within the moveOpponents function)
    moveOpponents()
    // Apply the random football shots function in here
    opponentShotInterval = setInterval(() => {
      if (totalOpponentArray.length === 0) {
        statusCheck()
      }
      opponentShots()
    }, 1200)
    // If let opponents is zero in level two, unhide the won-level-two div class, temporarily stop the keyboards from activating, hide the grid.
  }

  // Level three function
  function levelThree() {
    // Background chant changed
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    bluesChant.play()
    bluesChant.loop = true
    // Set the current level display inner HTML as 3
    level = 3
    currentLevelDisplay.innerHTML = level
    // Interval is shortened
    interval -= decreaseInterval
    // Reset starting position
    currentPosition = startingPosition
    // Enter grid
    wonLevelTwo.classList.add('hidden')
    grid.classList.remove('hidden')
    // Add player
    addPlayer(currentPosition)
    // Add opponents the total array of opponents
    addOpponent()
    // Apply move opponent function with the new interval (end game is within the moveOpponents function)
    moveOpponents()
    // Apply the random football shots function in here
    opponentShotInterval = setInterval(() => {
      if (totalOpponentArray.length === 0) {
        statusCheck()
      }
      opponentShots()
    }, 900)
  }

  // End game function
  function endGameLost() {
    // Pause audio
    if (!grid.classList.contains('hidden') && level === 1) {
      saintsChant.pause()
    } else if (!grid.classList.contains('hidden') && level === 2) {
      toonsChant.pause()
    } else if (!grid.classList.contains('hidden') && level === 3) {
      bluesChant.pause()
    }
    // Remove all the elements in the grid
    removeOpponent()
    removeEverything()
    // Clear intervals
    clearInterval(opponentMovements)
    grid.classList.add('hidden')
    lostGame.classList.remove('hidden')
    backgroundMusic.play()
    backgroundMusic.loop = true
    console.log('End Game')
    // Save the final score if it is the highest score
    highScoreChecker()
  }

  // Reset display and music class that will be used in the restart game function
  class restartDisplayAndMusic {
    constructor(displayType, music) {
      this.displayType = displayType
      this.music = music
    }

    restart() {
      this.displayType.classList.add('hidden')
      selectPlayerDisplay.classList.remove('hidden')
      // Reset Song
      this.music.pause()
      this.music.currentTime = 0
    }
  }
  // Class constants linking the display and BGM
  const gridLevelOne = new restartDisplayAndMusic(grid, saintsChant)
  const gridLevelTwo = new restartDisplayAndMusic(grid, toonsChant)
  const gridLevelThree = new restartDisplayAndMusic(grid, bluesChant)
  const lostGameBGM = new restartDisplayAndMusic(lostGame, backgroundMusic)
  const wonLevelOneBGM = new restartDisplayAndMusic(wonLevelOne, backgroundMusic)
  const wonLevelTwoBGM = new restartDisplayAndMusic(wonLevelTwo, backgroundMusic)
  const wonGameBGM = new restartDisplayAndMusic(wonGame, champione)

  // Restart game function
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
    // Remove clicked class from the select player containers using the player selection array
    for (let i = 0; i < playerSelection.length; i++) {
      playerSelection[i].classList.remove('clicked')
    }
    // Remove all the elements in the grid
    removeEverything()
    removeOpponent()
    // Reset the selectedPlayer boolean
    selectedRashford = false
    selectedHaaland = false
    selectedKane = false
    selectedSalah = false
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
    // Reset interval
    interval = 1000
    // Reset starting position
    currentPosition = startingPosition
    // Play background music
    backgroundMusic.play()
    // Click button audio
    click.play()
  }  

  // * Mute audio function
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




  // ! Events
  // Enter game
  trophy.addEventListener('click', enterGame)
  // Select player
  playerContainer.forEach(player => player.addEventListener('click', selectPlayer))
  // When keydown is pressed, move the player (only when the grid is not hidden)
  document.addEventListener('keydown', movePlayer)
  // When keydown is pressed using space, shoot the ball (only when the grid is not hidden)
  document.addEventListener('keydown', myShot)
  // When the "to the next level button" is pressed after level one, move to level two.
  toLevelTwoButton.addEventListener('click', levelTwo)
  // When the "to the next level button" is pressed, move to level three.
  toLevelThreeButton.addEventListener('click', levelThree)
  // Restart Game
  restartButton.addEventListener('click', restartGame)
  // Mute audio
  soundButton.addEventListener('click', muteAudio)
  



  // ! Page load
  createGrid()
}

window.addEventListener('DOMContentLoaded', init)
