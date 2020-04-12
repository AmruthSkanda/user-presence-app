import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App, { store } from './App';

export const render = () => ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(render);
render();
