import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr';
const InitialState = [
    {
        email: '',
        date: '',
        commentsList: [],
        index: -1
    }
]
const todos = (state = InitialState, action) => {
    switch (action.type) {
        case 'GETTING_VALUE': {
            const ind = state.findIndex(ele => ele.email === action.payload.email);
            const today = new Date(action.payload.date);
            const time = today.getHours() + ":" + today.getMinutes();
            if (ind !== -1) {
                const updatedState = [...state]
                updatedState[ind].date = time;
                if (action.payload.isEmailUpdate) {
                    updatedState[ind].isEmailUpdate = false,
                    updatedState[ind].commentsList[updatedState[ind].commentsList.length - 1] = action.payload.comments;
                } else {
                    updatedState[ind].isEmailUpdate = false,
                    updatedState[ind].commentsList.push(action.payload.comments);
                }
                return updatedState;
            } else {
                const newState = [...state, {
                    email: action.payload.email,
                    date: time,
                    isEmailUpdate: false,
                    commentsList: [action.payload.comments]
                }]
                return newState;
            }
        }
        case 'EDIT_VALUE': {
            const editState = [...state];
            editState[action.payload.index].index = action.payload.index;
            editState[action.payload.index].isEmailUpdate = true;
            return editState;
        }
        case 'DELETE_VALUE': {
            const afterDelete = [...state];
            afterDelete.splice(action.payload.index, 1);
            return afterDelete;
        }

        default:
            return state
    }
}


export default combineReducers({
    todos,
    toastr: toastrReducer
})