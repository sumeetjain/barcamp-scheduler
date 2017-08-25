var React = require('react');

const categoryImage = {
  position: "absolute",
  top: "8px",
  right: "8px"
};

var CategoryImage = React.createClass({
  getDefaultProps: function () {
    return {
      image: './app/images/tracks-technology.png'
    }
  },
  render: function() {
    return(
      <div style={categoryImage}><img src={this.props.image} width="50" /></div>
    );
  }
});

module.exports = CategoryImage;