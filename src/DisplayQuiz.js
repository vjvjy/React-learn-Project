import React, { Component } from "react";
// import axios from 'axios';

class DisplayQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            questionToDisplay: '',
            showAnswer: false
        };
    }

    componentDidMount() {
        return fetch('data.json')
            .then((response) => response.json())
            .then((data) => this.setUser(data));
    }

    setUser = (data) => {
        console.log(data)
        this.setState({ data: data })
    }

    displayQuestion = (quesId) => {
        console.log('ques---------------------------', quesId)
        let a = this.state.data.filter((item) => item.id === quesId ? item : null);
        console.log('ques---------------------------', a)
        this.setState({ questionToDisplay: a })
    }

    checkAnswer = () => {
        this.setState({showAnswer: true});
    }

    render() {
        const { data, questionToDisplay, showAnswer } = this.state;
        console.log("questionToDisplay", questionToDisplay)
        console.log("data", data)
        const questionId = data.map((item, index) => {
            return item.id
        })
        console.log("question", questionId)
        return (
            <div className="outContainer">
                <div className="displayArea">
                    <ol className="quesIdContainer">
                        {questionId.map((ques) => (
                            <li className="quesId" key="ques" onClick={() => this.displayQuestion(ques)}>{ques}</li>
                        ))}
                    </ol>
                </div>
                <div className="displayArea quesContainer">
                    {/* <p>jjjj</p> */}
                    {(questionToDisplay.length > 0) ? <p className="ques"> {questionToDisplay[0].question} </p> : <p></p>}
                    {(questionToDisplay.length > 0) ? <button className="check" onClick={this.checkAnswer()}>Check Answer</button> : <p></p>}
                    {showAnswer ? <p> {questionToDisplay[0].answer} </p> : <p></p> }
                </div>
            </div>
        )
    }
}

export default DisplayQuiz;
