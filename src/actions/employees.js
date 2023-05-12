import {addMainEmployeesAction} from "../redux/employees";

export const fetchMainEmployees = () => {
    return function (dispatch) {
        fetch('http://localhost:4444/employeesParent')
            .then(response => response.json())
            .then(json => dispatch( addMainEmployeesAction(json)))
    }
}

export const  getEmployeesInfo  = (employeesID) => {
       return  fetch('http://localhost:4444/employees/' + employeesID)
            .then(response => response.json())
            .then((json) => {
                return json;
            })

}
