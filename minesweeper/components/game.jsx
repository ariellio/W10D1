import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper.js'
 class Game extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {board: new Minesweeper.Board()};
        this.updateGame = this.updateGame.bind(this);        
        console.log('This is first method called upon initialization')
        
    }

    updateGame() {

    }

    render() {
        
        return (
            <div>
                < Board board={this.state.board} updateGame={this.updateGame}/>
                
            </div>
        )
       
    }

}

export default Game