var React = require('react');
var Radium = require('radium');
var Card = require('./card.js');

const center = {
  textAlign: "center",
  fontSize: "2.5em",
  color: "red",
  fontFamily: "Helvetica",
}

const row = {
  display: "flex",
  flexDirection: "column",
  '@media (min-width: 500px)': {
      flexDirection: "row",
      justifyContent: "space-around"
  }
}

var RowByTime = React.createClass({
  getDefaultProps: function () {
    return {
      time: 'A Time to be Defined :D'
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({info: nextProps.info});
  },
  render: function() {
    return(
      <div>
        <div style={center}>{this.props.time}</div>
        <br />
        <div style={row}>
          <Card info={this.props.info["Creative"]} category="Creative" />
          <Card info={this.props.info["Entrepreneur"]} category="Entrepreneur" />
          <Card info={this.props.info["Technology"]} category="Technology" />
          <Card info={this.props.info["Kitchen Sink"]} category="Kitchen Sink" />
        </div>
      </div>
    )
  }
});

module.exports = Radium(RowByTime);