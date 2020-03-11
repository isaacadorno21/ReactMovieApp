import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MovieGallery from './components/MovieGallery';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/gallery" component={MovieGallery} />
        <Route path="/list" component={MovieList} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


serviceWorker.unregister();