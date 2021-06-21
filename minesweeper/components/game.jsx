import React from 'react';
// import {Board} from '../minesweeper'
import * as Minesweeper from '../minesweeper'
export default class Game extends React.Component {
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
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }

}