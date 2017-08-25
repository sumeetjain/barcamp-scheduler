var React = require('react');

const signupTitleStyle = {
  fontSize: "1.5em",
  textAlign: "center",
  marginTop: "44%"
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

module.exports = SignupContent;