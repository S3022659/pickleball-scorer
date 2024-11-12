// generated by co-pilot PickleballGame.ts
export class PickleballGame {
  player1Score: number;
  player2Score: number;
  currentServer: string;
  result: string;

  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentServer = "Player 1"; // Can be either "Player 1" or "Player 2"
    this.result = "";
  }

  // Method to score a point for the current server
  scorePoint() {
    if (this.currentServer === "Player 1") {
      this.player1Score++;
    } else {
      this.player2Score++;
    }
    this.checkWin();
  }

  // Undo point / play a let
  resetPoint() {
    if (this.currentServer === "Player 1") {
      this.player1Score--;
    } else {
      this.player2Score--;
    }
    this.checkWin();
  }

  getResults() {
    return this.result;
  }

  // Method to switch server
  switchServer() {
    this.currentServer =
      this.currentServer === "Player 1" ? "Player 2" : "Player 1";
  }

  // Method to check if there's a winner
  private checkWin() {
    if (this.player1Score >= 11 && this.player1Score - this.player2Score >= 2) {
      // TODO display message and dispay a reset button and log score to a UI element
      this.result = "Player 1 wins!";
    } else if (
      this.player2Score >= 11 &&
      this.player2Score - this.player1Score >= 2
    ) {
      this.result = "Player 2 wins!";
    }
  }

  // Method to reset the game
  resetGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentServer = "Player 1";
  }

  // Method to get the current score
  getScore() {
    return [
      { player1Score: this.player1Score, player2Score: this.player2Score },
    ]; //`Player 1: ${this.player1Score} Player 2: ${this.player2Score}`;
  }
}
