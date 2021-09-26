
// Actions

const SETNAME = "SETNAME"
const SETSURNAME = "SETSURNAME"
const SETPHONE = "SETPHONE"
const SETEMAIL = "SETEMAIL"
const SETBIO = "SETBIO"

// Action creators

export const setname = name => {return{ type: SETNAME, payload: name }}
export const setsurname = surname => {return{ type: SETSURNAME, payload: surname }}
export const setphone = phone => {return{ type: SETPHONE, payload: phone }}
export const setemail = email => {return{ type: SETEMAIL, payload: email }}
export const setbio = bio => {return{ type: SETBIO, payload: bio }}
    


// Initial state
const initialState = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    bio: "",
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETNAME: 
        return {
            ...state, 
            name: state.name = action.payload
        }
        case SETSURNAME: return {...state, surname: state.surname = action.payload}
        case SETPHONE: return {...state, phone: state.phone = action.payload}
        case SETEMAIL: return {...state, email: state.email = action.payload}
        case SETBIO: return {...state, bio: state.bio = action.payload}
        default:
            return state
    }
}

export default rootReducer