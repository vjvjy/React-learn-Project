import React, {Component} from "react";
  
class UserList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    // componentDidMount() {
    //     const localStorageData = (localStorage.getItem("regFormDatas") && localStorage.getItem("regFormDatas").length > 0) ? localStorage.getItem("regFormDatas") : [];
    //     console.log("localStorageData list---------", localStorageData)
    //     // const userList = JSON.parse(localStorageData);
    //     // console.log("user list---------", userList)
    //     // this.setState({userList})
    //     /* let heading = [];
    //     for (const key in userList) {
    //         heading.push(key)
    //     } */
    // }

    render() {
      return (
        <div>
      <table>
        <thead>
          <tr>
            hh
          </tr>
        </thead>
        <tbody>
         gg
        </tbody>
      </table>
    </div>
      );
    }  
  }  
  export default UserList;  