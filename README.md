# Tic-Tac-Toe

## The Brief
The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

## Approach

#### Modelling the Domain

**Board**
- has 9 fields
- marks relevant field with "x" or "o"

**Game**
- allows player to claim a field
- switch turn between players
- knows the rules of the game
- knows when game is over (when there is a winner or all fields are claimed)

**Interface**
- prints board on output
- asks user for input
- update fields on output
- informs the users their turn
- declares game is over
- declares winner

After assigning responsibilities to each of the classes, I start writing tests (Jasmine) for the app.

## Installation
