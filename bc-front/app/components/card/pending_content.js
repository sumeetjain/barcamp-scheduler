var React = require('react');

const pendingTitleStyle = {
  fontSize: "1.2em",
  textAlign: "center",
  marginTop: "36%",
  fontWeight: "100"
};

var PendingContent = React.createClass({
  getDefaultProps: function () {
    return {
    }
  },
  render: function() {
    return(
      <div style={pendingTitleStyle}>
        Someone<br/>is signing up<br/><em>right now</em>.
      </div>
    );
  }
});

module.exports = PendingContent;