var React = require('react');
var RowByTime = require('./row.js');

var AllRows = React.createClass({
  getInitialState: function() {
    debugger;
    return {
      data: this.props.data
    }
  },
  componentWillReceiveProps: function() {
    this.setState({data: this.nextProps.data});
  },
  times: function() {
    return Object.keys(this.state.data);
  },
  render: function() {
    var allRows = this.times().map((time) =>
      <RowByTime time={time} info={data[time]} />
    );
    return(
      <div>
        {allRows}
      </div>
      )
    }
  });

module.exports = AllRows;