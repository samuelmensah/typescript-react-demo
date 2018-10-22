// @ts-ignore
import * as constants from '../constants'


export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm{
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

/*
*   Increment Enthusiasm action
*/
// All actions must return a TYPE
export function incrementEnthusiasm(): IncrementEnthusiasm{
    return{
        type:constants.INCREMENT_ENTHUSIASM
    }
}


export function decrementEnthusiasm(): DecrementEnthusiasm{
    return{
        type:constants.DECREMENT_ENTHUSIASM
    }
}