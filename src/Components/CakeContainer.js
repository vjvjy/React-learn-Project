import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../Redux/cake/cakeActions'

function CakeContainer(props) {
    return(
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapdispatchToProps = dispatch => {
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(CakeContainer)