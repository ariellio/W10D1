import React from 'react';
import Tile from "./tile"

 class Board extends React.Component {
    constructor(props){
        super(props)
        console.log("we are in the board class");
        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    
    }


    render(){
        const board = this.props.board
        
        return(
            <div>
               
            {this.renderRows()}
            </div>
           
        )
    }

    renderRows(){
        const board = this.props.board;
        return board.grid.map ((row, i )=> {
            return (
            <div className="row" key={`row-${i}`}>
                {this.renderTiles(row, i)} //since i am using this.rendertiles in need to changed

            </div>
            );
        })
          
    }

    renderTiles(row, i){
        const board = this.props.board;
        return row.map((tile, j) =>{
            return (
                tile={tile}

            )

        })
    }
}

export default Board