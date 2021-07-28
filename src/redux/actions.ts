export type Action = {type: "CHANGE_SHAPE", payload: string}

export const changeShape = (shape:string): Action => ({
    type: "CHANGE_SHAPE",
    payload: shape
})