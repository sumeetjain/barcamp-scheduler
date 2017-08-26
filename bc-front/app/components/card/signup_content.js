var React = require('react');
var Radium = require('radium');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

const signupTitleStyle = {
  fontSize: "1.5em",
  textAlign: "center",
};

const trackStyle = {
  fontWeight: "200",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "12px",
  marginBottom: "9px",
  [media]: {
    marginTop: "40%"
  }
}

var SignupContent = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Sign up for this time!'
    }
  },
  render: function() {
    return(
      <div>
        <div style={trackStyle}>{this.props.category}</div>
        <div style={signupTitleStyle}>{this.props.title}</div>
      </div>
    );
  }
});

module.exports = Radium(SignupContent);