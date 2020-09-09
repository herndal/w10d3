import React from "react";
import * as MineSweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.rows = 3;
        this.bombs = 3;
        this.state = {
            board: new MineSweeper.Board (this.rows, this.bombs)
        };

        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    handleClick(bool){
        this.restartGame(bool);
    }
    
    restartGame(bool) {
        if (bool) {
            this.bombs += this.rows;
            this.rows += 2;
        } else {
            this.bombs -= 3;
            this.rows -= 2;
        }
        this.setState({ board: new MineSweeper.Board (this.rows, this.bombs)});
    }
    
    render () {
        if (this.state.board.won()) {
            alert(["YOU WIN I GUESS"]);
            return <div id="boom">
                <p>👼 play again, winner</p>
                <button onClick={this.handleClick.bind(this, true)}>here to click</button>
            </div>;
        }
        if (this.state.board.lost()) {
            alert(["you suck"]);
            return <div>
                <p id="boom">💥</p>
                <p>try agin sukrr</p>
                <button onClick={this.handleClick.bind(this, false)}>people should click buttons</button>
            </div>;
        }
        return <Board board={this.state.board} updateGame={this.updateGame}/>; 
    }   
}

export default Game;