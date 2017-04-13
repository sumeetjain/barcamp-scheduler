var React = require('react');

const name = {
  paddingTop: "25px",
  float: "left",
  fontSize: "0.75em"
};

var Name = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Jamie Locatis'
    }
  },
  render: function() {
    return(
      <div style={name}>{this.props.name}</div>
    );
  }
});

module.exports = Name;