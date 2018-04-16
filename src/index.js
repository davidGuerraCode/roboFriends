import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import 'tachyons';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();