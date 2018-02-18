import React  from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.jsx'

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<ContactForm />, document.getElementById('root'));
registerServiceWorker();
