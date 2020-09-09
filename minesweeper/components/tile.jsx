import React from "react";

class Tile extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let flagging = false;
        if(event.altKey) {
            flagging = true;
        }
        this.props.updateGame(this.props.tile, flagging);
    }

    render () {
        //logic to determine text rep
        const FLAGS = ["🏁", "🏳", "🏴", "🚩", "🎌", "⛳"];
        const thisTile = this.props.tile;
        let text;
        let klaus;
        if (thisTile.flagged) {
            text = FLAGS[Math.floor(Math.random() * FLAGS.length)];
            klaus = "flagged";
        } else if (!thisTile.explored) {
            text = " ";
            klaus = "unexplored";
        } else if (thisTile.bombed) {
            text = "💣";
            klaus = "bombed";
        } else {
            text = thisTile.adjacentBombCount() === 0 ? ' ' : thisTile.adjacentBombCount();
            klaus = "explored";
        }

        return <div className={"tile " + klaus} onClick={this.handleClick}> 
            <p> {text} </p>
        </div>;
    }
}

export default Tile;
