import rootreducer from '../reducer/index.js';
import {createStore} from 'redux';

const store = createStore(rootreducer);
export default store;