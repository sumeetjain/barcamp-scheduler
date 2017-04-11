var React = require('react');
var ReactDOM = require('react-dom');

var Name = React.createClass({
  render: function() {
    return(
      <div style={name}>{this.props.name}</div>
    );
  }
});

var Title = React.createClass({
  render: function() {
    return(
      <div style={title}>{this.props.title}</div>
    );
  }
});

var CategoryImage = React.createClass({
  render: function() {
    return(
      <div style={categoryImage}><img src={this.props.image} width="40" /></div>
    );
  }
});

var ClearFloats = React.createClass({
  render: function() {
    return(
      <div style={clear}></div>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return(
      <div>{this.props.description}</div>
    );
  }
});

var Barcamp = React.createClass({
  render: function() {
    return (
      <div style={box}>
        <Name name="Jamie Locatis" />
        <CategoryImage image="./app/images/track_creative_2016.png" />
        <ClearFloats />
        <Title title="This is a title of something" />
        <Description description="Celiac kitsch poutine, tacos stumptown cardigan jianbing pug pickled kinfolk try-hard put a bird on it air plant activated charcoal. Swag kinfolk marfa cornhole, ennui try-hard narwhal blue bottle forage gastropub schlitz keytar. Bicycle rights schlitz farm-to-table woke biodiesel, shoreditch scenester four dollar toast fashion axe heirloom godard tbh DIY skateboard. Offal cliche hashtag franzen asymmetrical art party." />
      </div>
    );
  }
});

module.exports = Barcamp;