var React = require('react');

const categoryImage = {
  float: "right"
};

var CategoryImage = React.createClass({
  getDefaultProps: function () {
    return {
      image: './app/images/track_technology_2016.png'
    }
  },
  render: function() {
    return(
      <div style={categoryImage}><img src={this.props.image} width="40" /></div>
    );
  }
});

module.exports = CategoryImage;