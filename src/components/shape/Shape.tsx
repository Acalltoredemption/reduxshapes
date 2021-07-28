import React from 'react';
import {useSelector} from 'react-redux';
import { ShapeState } from '../../redux/shapeReducer';

interface NewShapeInputProps {
    changeShape(shape:string): void;
}

export const Shape: React.FC<NewShapeInputProps> = () => {

    const currentShape = useSelector<ShapeState>(state => state.shape)
    return(
        <div>I am a {currentShape}</div>
    )
}