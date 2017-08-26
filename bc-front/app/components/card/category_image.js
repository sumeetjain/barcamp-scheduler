var React = require('react');
var Radium = require('radium');

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'


const categoryImage = {
  position: "absolute",
  top: "8px",
  right: "8px",
  width: "35px",

  [media]: {
    width: "50px",    
  }
};

const catImageStyle = {
  width: "100%"
}

var CategoryImage = React.createClass({
  getDefaultProps: function () {
    return {
      image: './app/images/tracks-technology.png'
    }
  },
  render: function() {
    return(
      <div style={categoryImage}><img src={this.props.image} style={catImageStyle} /></div>
    );
  }
});

module.exports = Radium(CategoryImage);