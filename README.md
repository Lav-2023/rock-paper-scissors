
# Rock Paper Scissors

For this project, you will create the game "Rock Paper Scissors". This game will be played entirely in the console. This project is the part of an assignment in 'The Odin Project'.

    Step 1: Setup the project structure

          Create a new Git repository for your project.
          Create a blank HTML document with a script tag.
          Check if JavaScript is linked correctly:
          Write console.log("Hello World") in JavaScript.
          Check if “Hello World” is logged in the browser console once you open your webpage.

          It’s best practice to link to an external JavaScript file inside this script tag. 
          Using an external JavaScript file keeps your HTML file clean and organized.

          You don’t have to write additional code in the HTML file. This game is played entirely via the console.


    Step 2: Write the logic to get the computer choice

          Your game will be played against the computer. 
          You will write a function that randomly returns “rock”, “paper” or “scissors”.

          Create a new function named getComputerChoice.
          Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

          Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.


    Step 3: Write the logic to get the human choice

          Your game will be played by a human player. 
          You will write a function that takes the user choice and returns it.

          Create a new function named getHumanChoice.
          Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

          Hint: Use the prompt method to get the user’s input.
          You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. 
          For now, just assume the user will always enter a valid choice.
          Test what your function returns by using console.log.

    
    Step 4: Declare the players score variables

          Your game will keep track of the players score. 
          You will write variables to keep track of the players score.

          Create two new variables named humanScore and computerScore in the global scope.
          Initialize those variables with the value of 0.


    Step 5: Write the logic to play a single round

          Your game will be played round by round. 
          You will write a function that takes the human and computer player choices as arguments, 
          plays a single round, increments the round winner’s score and logs a winner announcement.

          Create a new function named playRound.
          Define two parameters for playRound: humanChoice and computerChoice. 
          Use these two parameters to take the human and computer choices as arguments.
          Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
           
          Write the code for your playRound function to console.log a string value representing the round winner, 
          such as: “You lose! Paper beats Rock”.

          Increment the humanScore or computerScore variable based on the round winner.

    
    Step 6: Write the logic to play the entire game

          Your game will play 5 rounds. 
          You will write a function named playGame that calls playRound to play 5 rounds, 
          keeps track of the scores and declares a winner at the end.

          Create a new function named playGame.
          Move your playRound function and score variables so that they’re declared 
          inside of the new playGame function

          Play 5 rounds by calling playRound 5 times.

          Hint: When you assign a function call to a variable, the return value of that 
          function is assigned to the variable. 
          Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. 
          
          You need to recall the choice functions to get new choices for each round.

          Re-work your previous functions or create more helper functions if necessary. 
          Specifically, you may want to change the return values to something more useful.


In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

For now, remove the logic that plays exactly five rounds.
      . Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

      . Add a div for displaying results and change all of your console.logs into DOM methods.

      . Display the running score, and announce a winner of the game once one player reaches 5 points.
      
      . You will likely have to refactor (rework/rewrite) your original code to make it work for this. 



