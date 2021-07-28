import {createStore} from 'redux';
import { shapeReducer } from './shapeReducer';

export const store = createStore(shapeReducer);