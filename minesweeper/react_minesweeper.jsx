import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./components/game";
// import Minesweeper from "./minesweeper";
//access to Minesweeper.Board and Minesweeper.Tile

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Game />, root);

});