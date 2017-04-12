var React = require('react');
var Card = require('./card.js')

const center = {
  textAlign: "center",
  fontSize: "2.5em",
  color: "red",
  fontFamily: "Helvetica"
}

const row = {
  display: "flex"
}

var RowByTime = React.createClass({
  getDefaultProps: function () {
    return {
      time: 'A Time to be Defined :D'
    }
  },
  getInitialState: function () {
    return {
      info: this.props.info
    }
  },
  render: function() {
    return(
      <div>
        <div style={center}>{this.props.time}</div>
        <br />
        <div style={row}>
          <Card value={this.props.info["Entrepreneur"]} />
          <Card value={this.props.info["Technology"]} />
          <Card value={this.props.info["Creative"]} />
          <Card value={this.props.info["Kitchen Sink"]} />
        </div>
      </div>
    )
  }
});

module.exports = RowByTime;