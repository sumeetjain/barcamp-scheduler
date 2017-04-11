var React = require('react');
var RowByTime = require('./row.js');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <RowByTime time="9:00am" />
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