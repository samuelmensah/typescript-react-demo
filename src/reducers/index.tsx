import {EnthusiasmAction} from "../actions";
import {StoreState} from "../types/index";
import {INCREMENT_ENTHUSIASM,DECREMENT_ENTHUSIASM} from "../constants/index";



/*
The reducer is also a function, however, we never call it. 
We only inform Redux that this is our reducer, 
and Redux calls it whenever we fire an action, cool! 
When Redux calls our reducer, it passes two arguments to it, 
the first one is the up-to-date State, and the second one is our fired action.

*/
export function enthusiasm(state:StoreState,action:EnthusiasmAction):StoreState{
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            // Notice that we're using the object spread (...state) which allows us to create a shallow copy of our state,
            // while replacing the enthusiasmLevel. It's important that the enthusiasmLevel property come last,
            // since otherwise it would be overridden by the property in our old state.
            return{...state, enthusiasmLevel:state.enthusiasmLevel +1};
        case DECREMENT_ENTHUSIASM:
            return{...state, enthusiasmLevel:state.enthusiasmLevel -1};
    }

    return state;
}