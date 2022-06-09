import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const root = document.getElementById('root');
//ReactDOM.render(<App />, root);

const root = document.getElementById('root');

function Welcome(props) {
    const element =
    (
         <div>
            <h1>Hello, {props.firstname} {props.lastname}!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
     <App />
         </div>
        
     );
  return element;
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
    const welcomeHeader = <Welcome firstname="Derek" lastname="Walsh" />;
    //ReactDOM.render(element, root);
    ReactDOM.render(<App />, root);
}

ReactDOM.render(<App />, root);

//setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
