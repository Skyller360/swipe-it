import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Square from './components/Square/Square';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Square />, document.getElementById('root'));
registerServiceWorker();
