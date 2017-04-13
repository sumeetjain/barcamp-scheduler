var React = require('react');
var RowByTime = require('./row.js');

var App = React.createClass({
  interval: null,

  getInitialState: function() {
    return {
      time: [],
      info: {}
    }
  },
  componentDidMount: function () {
    this.interval = setInterval(function(){
      this.getUpdate();
    }.bind(this), 1000);
  },
  getUpdate: function() {
    var _this = this;
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/getdata');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      response = JSON.parse(xhr.responseText);
      _this.setState({time: Object.keys(response), info: response});
    }
    xhr.send();
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    var allRows = this.state.time.map((time) =>
      <RowByTime time={time} info={this.state.info[time]} />
    );
    return(
      <div>
        {allRows}
      </div>
      )
    }
  });

module.exports = App;