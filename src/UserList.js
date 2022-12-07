import React, {Component} from "react";
import {history} from './history';
  
class UserList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            tHeader: []
        }
    }

    componentDidMount() {
        const localStorageData = (localStorage.getItem("regFormDatas") && localStorage.getItem("regFormDatas").length > 0) ? localStorage.getItem("regFormDatas") : [];
        console.log("localStorageData list---------", localStorageData)
        //  const userList = JSON.parse(localStorageData);
         const userList = localStorageData && localStorageData.length > 0 ? JSON.parse(localStorageData) : "";
        
         const tHeader = Object.keys(userList[0]); 
         tHeader.unshift("S.No");
       
        this.setState({userList, tHeader})
    }

    edit = (index) => {      
      console.log("index---------------------------------->", index)
      let path = '/user/' + index;
      history.push(path);
    }

    render() {
      const {tHeader, userList} = this.state;
      let heading = tHeader.map((item) => {
        return (<th>{item.toUpperCase()}</th>)
    });
      const value = userList.map((item, index) => {
          return (<tr key = {index + 1}>
          <td>{index + 1}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
          <td>{item.address}</td>
          <td>{item.qualification}</td>
          <td>{item.maritalStatus}</td>
          <td>{item.gender}</td>
          <td>{item.bloodGroup}</td>
          <td className="edit" onClick={() => this.edit(index)}>Edit</td>
          </tr>)
   
      });
      console.log("value",value)
      return (
      <table>
        <tr key = {0}>
        {heading}
        </tr>
        <tbody>
          {value}
        </tbody>
      </table>
      );
    }  
  }  
  export default UserList;  