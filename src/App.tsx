import React from 'react';
import {Shape}from './components/shape/Shape';
import {useDispatch} from 'react-redux';
import { changeShape } from './redux/actions';
import './App.css';
import { ShapeInputs } from './components/selectors/shapeinputs/ShapeInputs';

const OnShapeChange = (shape:string) => {

  const dispatch = useDispatch();

  const OnShapeChange = (shape:string) => {
  dispatch(changeShape(shape))
  }
}

function App() {
  return (
    <div className="App">
      <Shape changeShape={OnShapeChange} />
      <ShapeInputs />
    </div>
  );
}

export default App;
