import React, {Component} from 'react';
import WithCounter from './withCounter';

class HoverCounter extends Component {

    render() {
        return (
            <div onMouseOver={this.props.incrementHandler}>Hovered {this.props.counter} times</div>
        )
    }
}

export default WithCounter(HoverCounter);