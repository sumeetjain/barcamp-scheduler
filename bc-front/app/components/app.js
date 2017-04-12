var React = require('react');
var RowByTime = require('./row.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      time: []
    }
  },
  componentDidMount: function() {
    var _this = this;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/ajaxtest');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      response = JSON.parse(xhr.responseText);
      _this.setState({time:response});
    }
    xhr.send();
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
  var allRows = this.state.time.map((time) =>
    <RowByTime time={time} />
  );
    return(
      <div>
        {allRows}
      </div>
    )
  }
});

module.exports = App;