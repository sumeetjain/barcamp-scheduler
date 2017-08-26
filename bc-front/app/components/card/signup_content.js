var React = require('react');
var Radium = require('radium');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

const signupTitleStyle = {
  fontSize: "1.5em",
  textAlign: "center",

  [media]: {
    marginTop: "44%"
  }
};

var SignupContent = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Sign up for this time!'
    }
  },
  render: function() {
    return(
      <div style={signupTitleStyle}>{this.props.title}</div>
    );
  }
});

module.exports = Radium(SignupContent);