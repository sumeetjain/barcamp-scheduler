var React = require('react');

const box = {
  width: "300px",
  height: "300px",
  backgroundColor: "#eee",
  fontFamily: "Helvetica",
  marginRight: "10px",
  paddingLeft: "5px",
  paddingRight: "5px"
};

const title = {
  fontSize: "1.5em"
};

const categoryImage = {
  float: "right"
};

const name = {
  paddingTop: "25px",
  float: "left",
  fontSize: "0.75em"
};

const clear = {
  clear: "both"
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

var CategoryImage = React.createClass({
  getDefaultProps: function () {
    return {
      image: './app/images/track_creative_2016.png'
    }
  },
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
  getDefaultProps: function () {
    return {
      description: 'Celiac kitsch poutine, tacos stumptown cardigan jianbing pug pickled kinfolk try-hard put a bird on it air plant activated charcoal. Swag kinfolk marfa cornhole, ennui try-hard narwhal blue bottle forage gastropub schlitz keytar. Bicycle rights schlitz farm-to-table woke biodiesel, shoreditch scenester four dollar toast fashion axe heirloom godard tbh DIY skateboard. Offal cliche hashtag franzen asymmetrical art party.'
    }
  },
  render: function() {
    return(
      <div>{this.props.description}</div>
    );
  }
});

var Card = React.createClass({
  getInitialState: function () {
    return {
      name: this.props.value["name"],
      title: this.props.value["title"],
      description: this.props.value["description"]
    }
  },

  render: function() {

    return (
      <div style={box}>
        <Name name={this.state.name}/>
        <CategoryImage />
        <ClearFloats />
        <Title title={this.state.title}/>
        <Description description={this.state.description}/>
      </div>
    );
  }
});

module.exports = Card;