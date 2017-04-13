var React = require('react');

const letters = {
  color: "pink",
  position: "absolute",
  bottom: "5px",
  right: "15px",
  fontSize: "1.75em",
  fontFamily: "cursive"
};

var CategoryLetter = React.createClass({
  getDefaultProps: function () {
    return {
      letter: 'N'
    }
  },
  render: function() {
    return(
      <div style={letters}>{this.props.letter}</div>
    );
  }
});

module.exports = CategoryLetter;