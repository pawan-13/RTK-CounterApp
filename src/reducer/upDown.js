const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    //   switch(action.type) {
    //     case "Increment" : return state + 1;
    //     case "Decrement" : return state - 1;
    //     default: return state;
    //   }
    if(action.type === "Increment") {
        return state + 1;
    }
    else if(action.type === "Decrement"){
        return state - 1;
    }
    else{
        return state;
    }
}
export default changeTheNumber;