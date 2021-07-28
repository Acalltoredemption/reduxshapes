import { Action } from "./actions";

export interface ShapeState {
    shape: string
}

const initialState = {
    shape: 'square'
}

export const shapeReducer = (state:ShapeState = initialState, action: Action) => {
    switch(action.type){
        case "CHANGE_SHAPE": {
            return {...state, shape: state.shape}
        }
        default: return state;
    }
}