const ADD_MAIN_EMPLOYEES = 'ADD_MAIN_EMPLOYEES';
const ADD_TO_CACHE = 'ADD_TO_CACHE';

let initialState = {
    node: [],
    cache: []
};

const EmployeesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MAIN_EMPLOYEES: {

            state.node = dataParser(action.data)

            return {...state}
        }
        case ADD_TO_CACHE: {
            const data = dataParser(action.data)
            return {...state, ...state.cache[action.parent] = data }
        }
        default:
            return state;
    }
}

export const addMainEmployeesAction = (data) => ({type: ADD_MAIN_EMPLOYEES, data})

export const addToCacheAction  = (parent, data, resolve) => ({type: ADD_TO_CACHE, parent, data, resolve})

export const addToCache = (parent, data, resolve) => async (dispatch) => {
    dispatch(addToCacheAction(parent, data, resolve));
    resolve();
}

export default EmployeesReducer;

const dataParser = (data) => {
    if (data || !data.length) {
        return data.map(item => (
            {
                "value": item._id,
                "label": item.name + ' ' + item.surname,
                "children": [],
                "childrenIsLoad": false
            }
        ))
    }
    return []
}
