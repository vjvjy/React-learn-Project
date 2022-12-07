import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

function UserComponent({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    },[])
    return userData.loading ? (
        <h2>API Loading</h2> 
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User list</h2>
            <div>
                {userData && userData.users && userData.users.map(user => <p>{user.address.street}</p>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapdispatchToProps = dispatch => {
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(UserComponent)