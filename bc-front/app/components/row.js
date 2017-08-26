var React = require('react');
var Radium = require('radium');
var Card = require('./card.js');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

const center = {
  textAlign: "center"
}

const timeStyle = {
  fontSize: "2.5em",
  color: "#1e122b",
  backgroundColor: "#fff",
  padding: "20px",
  display: "block",
  [media]: {
    display: "inline-block",
    margin: "45px 0 30px",
    padding: "8px 20px",
  },
}

const row = {
  display: "flex",
  flexDirection: "column",
  '@media (min-width: 500px)': {
      flexDirection: "row",
      justifyContent: "center"
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
        <div style={center}>
          <span style={timeStyle}>{this.props.time}</span>
        </div>

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