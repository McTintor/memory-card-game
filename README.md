# **Memory Card Game** 

This is a simple memory card game built with **React**. The game involves 12 clickable cards that shuffle after every click. The objective is to click on all 12 cards without clicking the same card twice. Each successful click increases your score by 1. If you click the same card twice, the game is over, and your score is reset. A modal will appear showing your score and giving you an option to play again.

Live version here: https://mctintor-memory-card-game.netlify.app/

## **Features**
- **Shuffled Cards**: After each card click, the cards are reshuffled.
- **Score Tracking**: The score increases by 1 with each successful click.
- **High Score**: Your highest score is saved and displayed.
- **Game Over Modal**: When you click the same card twice, a modal pops up displaying your score and providing an option to play again.
- **Responsive UI**: The game adapts to different screen sizes and devices.

## **Technologies Used**
- **React**: For building the user interface.
- **React Context API**: For managing game state across the app, including the score, high score, and card shuffling.
- **CSS**: For basic styling.

## **Getting Started**

### **Installation**

1. Clone the repository:
    ```bash
    git clone https://github.com/McTintor/memory-card-game.git
    ```

2. Navigate into the project directory:
    ```bash
    cd memory-card-game
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to:
    ```
    http://localhost:3000
    ```

### **How to Play**

1. Start the game by clicking on any card.
2. After each click, the cards will shuffle.
3. The goal is to click all 12 cards without clicking the same card twice.
4. If you click the same card twice, the game will end, and a modal will show your score.
5. To play again, click the "Play Again" button in the modal, and the game will reset.

## **Game Components**

- **App.jsx**: The main entry point of the app, rendering the `Header` and `GameBoard` components inside the `GameProvider` context.
- **Header.jsx**: Displays the current score and high score.
- **GameBoard.jsx**: Displays the grid of shuffled cards.
- **Card.jsx**: Represents an individual card component with the image and click event.
- **Modal.jsx**: Pops up when the game ends, showing the player's score and a "Play Again" button.
- **Context.jsx**: Manages the game's state (score, high score, clicked cards, and shuffling logic) using React Context API.

## **Future Enhancements**
- **Difficulty Levels**: Add different difficulty levels (e.g., more cards).
- **Card Themes**: Add different themes for the cards (e.g., animals, sports, etc.).
- **Timer**: Add a timer to track how long it takes to complete the game.
- **Animations**: Improve the UI with card flip animations and transitions.
