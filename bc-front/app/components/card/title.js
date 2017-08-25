var React = require('react');

const title = {
  fontSize: "28px",
  marginBottom: "3px"
};

var Title = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'This is a title of something'
    }
  },
  render: function() {
    return(
      <div style={title}>{this.props.title}</div>
    );
  }
});

module.exports = Title;