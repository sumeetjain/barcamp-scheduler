var React = require('react');
var Radium = require('radium');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

const pendingTitleStyle = {
  fontSize: "1.2em",
  textAlign: "center",
  fontWeight: "100",
  [media]: {
    marginTop: "36%",
  }
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

module.exports = Radium(PendingContent);