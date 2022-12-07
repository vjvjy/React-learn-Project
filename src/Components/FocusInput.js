import React, {Component} from 'react';
import Input from './Input';

class FocusInput extends Component {
 constructor(props) {
    super(props);
    this.newRef = React.createRef();
 }

focusHandler = () => {
    console.log(this.newRef)
    this.newRef.current.focusRef();
}

 render() {
    return (
        <div>
            <Input ref={this.newRef}/>
            <button onClick={this.focusHandler}>Focus</button>
        </div>
    )
 }
}

export default FocusInput