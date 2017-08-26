var React = require('react');
var Radium = require('radium');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'


const name = {
  marginTop: "20px",
  fontSize: "16px",
  fontWeight: "200",
  display: "inline-block",
  padding: "1px 6px",
  marginBottom: "12px",
  backgroundColor: "#fff",
  color: "#1e122b"
};

const trackStyle = {
  fontWeight: "200",
  marginBottom: "9px",
  [media]: {
    display: "none"
  }
}

var Name = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Jamie Locatis'
    }
  },
  render: function() {
    return(
      <div>
        <div style={trackStyle}>{this.props.category}</div>
        <div style={name}>{this.props.name}</div>
      </div>
    );
  }
});

module.exports = Radium(Name);