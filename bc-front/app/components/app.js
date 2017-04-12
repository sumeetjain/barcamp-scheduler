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
      response = xhr.responseText;
      _this.setState({time:response});
      debugger;
    }
    xhr.send();
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return(
      <div>
        <RowByTime time={this.state.time} />
        <RowByTime time="9:30am" />
        <RowByTime time="10:00am" />
        <RowByTime time="10:30am" />
        <RowByTime time="11:00am" />
        <RowByTime time="11:30am" />
        <RowByTime time="12:00pm" />
        <RowByTime time="1:00pm" />
        <RowByTime time="1:30pm" />
        <RowByTime time="2:00pm" />
        <RowByTime time="2:30pm" />
        <RowByTime time="3:00pm" />
        <RowByTime time="3:30pm" />
        <RowByTime time="4:00pm" />
      </div>
    )
  }
});

module.exports = App;