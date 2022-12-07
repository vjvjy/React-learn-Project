import React, {Component} from 'react';
import WithCounter from './withCounter';

class ClickCounter extends Component {
    

    render() {
        return (
            <button onClick={this.props.incrementHandler}>clicked {this.props.counter} times</button>
        )
    }
}

export default WithCounter(ClickCounter);