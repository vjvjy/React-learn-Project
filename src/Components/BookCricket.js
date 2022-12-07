import React, {Component} from "react";

class BookCricket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber : 0,
            scoreArray: [],
            totalScore: 0,
            isGameOver: false
        }
    }

    generatePageNumber = () => {
        this.setState({
            pageNumber: Math.floor(Math.random() * 500)
        })
        this.addToMyScore();
    }

    addToMyScore = () => {
        const score = this.state.pageNumber % 10;
        const tempArray = this.state.scoreArray;
        // if(tempArray.length !== 0 && score !== 0) {
        tempArray.push(score);
        // }
        if (tempArray.length > 1 && score !== 0) {
            this.setState({
                scoreArray: tempArray
            })
        }
    }

    calcScore = () => {
        const totalScore = this.state.scoreArray.reduce((a, b) => a + b, 0)
        this.setState({
            totalScore,
            isGameOver: true
        })
    }

    playAgain = () => {
        this.setState({
            pageNumber : 0,
            scoreArray: [],
            totalScore: 0,
            isGameOver: false
        })
    }


    render() {
        const {pageNumber, scoreArray, totalScore, isGameOver} = this.state;
        return (
            <div className="outer-container">
                <div className="inner-container">
                <h2>Book Cricket</h2>

                {scoreArray && scoreArray.length > 1 && scoreArray[scoreArray.length - 1] === 0 ?
                <div>Game Over</div> :
                <button className="button-box" onClick={this.generatePageNumber}>Open page</button>}

                {scoreArray && scoreArray.length > 1 && scoreArray[scoreArray.length - 1] === 0 ?
                <div>-</div> :
                <div><br/>Page Number: {pageNumber}</div>}

                {scoreArray && scoreArray.length > 1 ?
                <div>My scores</div> :
                <p></p>}
                <div className="score-list">{scoreArray.toString()}</div>

                {scoreArray && scoreArray.length > 1 && scoreArray[scoreArray.length - 1] === 0 ?
                <button className="button-box" onClick={this.calcScore}>Calc score</button> :
                <p></p>}<br/>
                {isGameOver &&
                    <div>
                        <p><br />Total Score: {totalScore}</p>
                        <button className="button-box" onClick={this.playAgain}>Play again</button>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default BookCricket