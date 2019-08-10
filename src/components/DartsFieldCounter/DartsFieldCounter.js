import React, {Component} from 'react';

class DartsFieldHandler extends Component {
    getScoreRepresentation = (score) => {
        let repr = "";
        for (let i=1; i<=score; i++) {
            repr += "X";
            if (i%5 === 0) repr += "\n";
        }
        return repr;
    }

    render() {
        let style = {
            margin: "1vh",
            width: "fit-content",
            textAlign: "center",
            padding: "1vh",
            backgroundColor: "antiquewhite",
            whiteSpace: "pre"
        }

        return (
        <div onClick={this.props.hitHandler} style={style}>
            Score for {this.props.targetValue}: <br/> {this.getScoreRepresentation(this.props.score)}
        </div>
    )}
}

export default DartsFieldHandler;