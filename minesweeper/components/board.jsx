import React from "react";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props);
        // use props to make our board, and our user input method
    }
    
    render () {
        //TODO:  map tile invocations or somthin
        let tiles = this.props.board.grid.map((tileRow, idx) => {
            return <div className={'that-row-' + idx} key={"at-" + idx}>
                    {tileRow.map((meinTeil, i) => {
                        return <Tile key={idx+i} tile={meinTeil} updateGame={this.props.updateGame}/>
                    })}
            </div>
        })
        //find tiles and map to new tiles
        return (
            <div className="boarder">

                <h1 className="title"> doobie doober</h1>
                <div className="all-them-rows cf" style={{width:  + (33 * tiles.length) + 'px'}}>
                    {tiles}
                    
                </div>
            </div>
        )
    }
}

export default Board;


