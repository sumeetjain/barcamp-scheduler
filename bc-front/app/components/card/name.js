var React = require('react');

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