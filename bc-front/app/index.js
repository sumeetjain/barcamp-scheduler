var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.js');
const $API_URL = "http://localhost:3000/"

ReactDOM.render(<App />, document.getElementById('app'));