import { createStore } from "redux";

const initialState = {
    user:{
        email:'',
        password:'',
        isAuthenticated:false
    }
}
  
function reducer (state=initialState,action){
    if (action.type==='LOGIN'){
      state.user = action.payload
      state.user.isAuthenticated = true;
    }
    return (state);
}

const store = createStore(reducer);

export default store;