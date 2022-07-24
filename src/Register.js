import React, {Component} from "react";
import './App.css';
import {history} from './history';


export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            updateId: 0,
            check:false,
            firstNameCheck: false,
            lastNameCheck: false,
            emailCheck: false,
            ageCheck: false,
            contactCheck: false,
            userDetails: {},
            qualOptions: [
                {name: 'B.E', value: 'be', id: 1},
                {name: 'B.Tech', value: 'btech', id: 2},
                {name: 'B.Sc', value: 'bsc', id: 3},
                {name: 'Others', value: 'others', id: 4},
            ],
            genderOptions: [
                {name: 'Male', value: 'male', id: 1},
                {name: 'Female', value: 'female', id: 2},
                {name: 'Others', value: 'others', id: 3}
            ],
            bloodGroupOptions: [
                {value: 'A-positive', label: 'apositive'},
                {value: 'A-negative', label: 'anegative'},
                {value: 'B-positive', label: 'bpositive'},
                {value: 'B-negative', label: 'bnegative'},
                {value: 'AB-positive', label: 'abpositive'},
                {value: 'AB-negative', label: 'abnegative'},
                {value: 'O-positive', label: 'opositive'},
                {value: 'O-negative', label: 'onegative'},
            ],
            selectedQual: [],
            errors: {},
            formData: []
        }
    }

    componentDidMount() {
        console.log("alksc--------------------------->", window.location.href);
        let id = window.location.href.split("/").pop();
        this.setState({
            updateId: id
        })
        console.log("id--------------------------->", id);
        const localStorageData = (localStorage.getItem("regFormDatas") && localStorage.getItem("regFormDatas").length > 0) ? localStorage.getItem("regFormDatas") : [];
         const userList = JSON.parse(localStorageData);
         console.log("localStorageData userList---------", userList)
         console.log("localStorageData userList id---------", userList[id])

         const selectedQual = userList[id].qualification;
         const qual = this.state.qualOptions.map((item)=>{
            if (selectedQual.includes(item.name)) {
                return item.name;
            }
         }).filter(item => item);
         console.log("qual",qual);
        this.setState({ userDetails: {...userList[id]},selectedQual:qual})
      }

    submit = (event) => {
        console.log(this.props,"this.props=======>>>>>");
        event.preventDefault();
        const { userDetails, formData, updateId } = this.state;
        const errorData = this.errorHandling();
        this.setState({ errors: errorData })
        const isSubmit = this.isSubmit(errorData);
        if (isSubmit) {
            if(updateId !== null) {
             const localStorageData = (localStorage.getItem("regFormDatas") && localStorage.getItem("regFormDatas").length > 0) ? localStorage.getItem("regFormDatas") : [];
             const userList = JSON.parse(localStorageData);
             let deleteData = userList.filter((item, index) => index !== this.state.updateId );
             console.log("deleteData",deleteData);
             let updateData = deleteData.splice(this.state.updateId, 0, userDetails);
             console.log("updateData",updateData);
             localStorage.setItem("regFormDatas", JSON.stringify(updateData));
            } else {
            const formValues = (localStorage.getItem("regFormDatas") && localStorage.getItem("regFormDatas").length > 0) ? localStorage.getItem("regFormDatas") : [];
            const conFormValues = formValues && formValues.length > 0 ? JSON.parse(formValues) : [];
            const exactDatas = conFormValues.length > 0 ? conFormValues : []
            var datas = exactDatas;
            datas.push(userDetails);
            localStorage.setItem("regFormDatas", JSON.stringify(datas));
            }
            history.push('/userList');
        }
    }

    isSubmit = (errorData) => {
        let errorCount = 0;
        let successCount = 0;
        for (const err in errorData) {
            if(errorData[err].length > 0) {
                errorCount++;
            } else {
                successCount++;
            }
        }
        if(errorCount === 0) {
            return true
        } else {
            return false
        }
    }

    errorHandling = () => {
       const {userDetails} = this.state;
        const errors = {};
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        errors.firstName = (!userDetails.firstName || userDetails.firstName.trim().length === 0) ?  "Enter your firstname" : "";
        errors.lastName = (!userDetails.lastName || userDetails.lastName.trim().length === 0) ?  "Enter your lastname" : "";
        errors.email = (!userDetails.email) ? "Email is required" : regex.test(userDetails.email) === false ? "Invalid email id" : "";
        errors.age = (!userDetails.age) ? "Age is required" : (userDetails.age < 17) ?  "Age should be more than 18" : "";
        errors.phone = (!userDetails.phone) ? "Contact number is required" : (userDetails.phone.length > 10 ) ?  "Contact number should be of 10 digits" : "";
        errors.address = (!userDetails.address) ? "Address is required" : (userDetails.address.length < 30 ) ?  "Address must have atleast 30 chars" : "";
        errors.qualification = (!userDetails.qualification || userDetails.qualification.length === 0) ? "Choose your qualification" : "";
        errors.gender = !userDetails.gender ?  "Choose your gender" : "";
        errors.maritalStatus = !userDetails.maritalStatus ?  "Choose your marital Status" : "";
        errors.bloodGroup = !userDetails.bloodGroup ?  "Choose your bloodgroup" : "";
        return errors;
    }

    setValue = (event) => {
        const {name, value, type} = event.target;
        const {selectedQual} = this.state;
        var selArr = selectedQual;
        if (type === 'checkbox') {
            if (!selectedQual.includes(value)) {
                selArr.push(value);
            }
            else {
                selArr = selArr.filter(item => item !== value);
            }
            this.setState({ selectedQual: selArr, userDetails: {...this.state.userDetails, [name] : selArr  }, errors: {...this.state.errors, [name] : ''  } })
            console.log('selArr--', selArr)
        }
        else{
            this.setState({ userDetails: {...this.state.userDetails, [name] : value  }, errors: {...this.state.errors, [name] : ''  }})
        }
        console.log("event=---------->", event);
        console.log("value=---------->", value);
        console.log("type=---------->", type);
    }

    validateContact = (event) => {
        console.log("event=---------->", event);
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
    }

    render() {
        const {firstName, lastName, email, age, phone, address, bloodGroup, maritalStatus, gender} = this.state.userDetails;
        const {selectedQual, qualOptions, bloodGroupOptions, errors, genderOptions} = this.state;
        console.log("selectedQual",selectedQual);
        const qualificationOptions = qualOptions.map((item, index) => {
            let selectBoolean = selectedQual.includes(item.name)
            return (<><input type="checkbox" name="qualification" value={item.name} checked={selectBoolean} key={index}
            onChange={this.setValue} />{item.name}</>)
        });
        const genderSelected = genderOptions.map((item, index) => {
            let selectBoolean = item.value === gender ? true : false;
            console.log("selectBoolean----->" , selectBoolean, gender, item.name)
            return (<><input type="radio" value={item.value} name="gender" onChange={this.setValue} checked={selectBoolean}/>{item.name}</>)
        });
        return (
            <div className="registerForm">
                <div className="tags">
                    <form>
                        <div>
                        <label className="label">First Name:</label>
                            <input type="text" className="inputFields" name="firstName" value={firstName} onChange={this.setValue}
                            placeholder="Enter your firstname here"></input><br />
                            <label className="label"></label>
                            {<span className="error">{errors["firstName"]}</span>}
                        </div>
                        <div>
                        <label className="label">Last Name:</label>
                            <input type="text" className="inputFields" name="lastName" value={lastName} onChange={this.setValue} 
                            placeholder="Enter your lastname here"></input><br />
                            <label className="label"></label>
                            {<span className="error">{errors["lastName"]}</span>}
                        </div>
                        <div>
                        <label className="label">Email:</label>
                            <input type="email" className="inputFields" name="email" value={email} onChange={this.setValue} 
                            placeholder="Enter your valid email id here"></input><br />
                            <label className="label"></label>
                            {<span className="error">{errors["email"]}</span>}
                        </div>
                        <div>
                        <label className="label">Age:</label>
                            <input type="number" className="inputFields" name="age" value={age} onChange={this.setValue} 
                            placeholder="Enter your age here"></input><br />
                            <label className="label"></label>
                            {<span className="error">{errors["age"]}</span>}
                        </div>
                        <div>
                        <label className="label">Contact:</label>
                            <input type="text" className="inputFields" onKeyPress={this.validateContact} name="phone" value={phone} onChange={this.setValue} 
                            placeholder="Enter your contact # here"></input><br />
                            <label className="label"></label>
                            {<span className="error">{errors["phone"]}</span>}
                        </div>
                        <div>
                            <label className="label">Enter address :</label>
                            <input type="textarea"
                                name="address"
                                value={address}
                                onChange={this.setValue}
                            /><br />
                            <label className="label"></label>
                            {<span className="error">{errors["address"]}</span>}
                        </div>
                        <div>
                        <label className="label">Qualification:</label>
                            {qualificationOptions}<br />
                            <label className="label"></label>
                            {<span className="error">{errors["qualification"]}</span>}
                        </div>
                        <div>
                            <label className="label">Gender:</label>
                            {genderSelected}<br />
                            <label className="label"></label>
                            {<span className="error">{errors["gender"]}</span>}
                        </div>
                        <div>
                            <label className="label">Marital Status: </label>
                            <select name="maritalStatus" value={maritalStatus} onChange={this.setValue}>
                                <option value="selected" selected disabled>-Select-</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                            </select><br />
                            <label className="label"></label>
                            {<span className="error">{errors["maritalStatus"]}</span>}
                        </div>
                        <div>
                            <label className="label">Blood Group: </label>
                            <select value={bloodGroup} name="bloodGroup" onChange={this.setValue}>
                            <option value="selected" selected disabled>-Select-</option>
                                {bloodGroupOptions.map((option, index) => (
                                    <option value={option.label} key={index}>{option.value}</option>
                                ))}
                            </select><br />
                            <label className="label"></label>
                            {<span className="error">{errors["bloodGroup"]}</span>}
                        </div>
                        <button type="button" onClick={this.submit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
