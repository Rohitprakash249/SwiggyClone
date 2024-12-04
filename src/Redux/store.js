import { createStore } from "redux";

const user = {
    name: "Rohit",
    email: "Rohit123@gmail.com"
}

function reducer(state = user, action){
    switch(action.type) {
        case "updateName" :
            return { ...state, name : action.payload};
        case "updateEmail" :
            return {
                ...state, email : action.payload
            };
        default :
        return state;    
    }
}

const store = createStore(reducer);


export default store;